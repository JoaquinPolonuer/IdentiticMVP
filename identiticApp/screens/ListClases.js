import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import { Header, SearchBar } from "react-native-elements";
import styled from "styled-components";
import SchoolName from "../components/SchoolName";
import Clase from "../components/Clase";
import Ofrecer from "../components/Ofrecer";
import {Platform, StyleSheet, View, FlatList} from 'react-native';
import Subject from "../components/Subjects";
import LinearGradient from "react-native-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ClassBenefit from "../components/ClassBenefit";




export default class ListaClases extends React.Component {

  state =
  {
    data:[]
  }
  
  fetchData= async()=>
  {
    const response = await fetch('http://192.168.0.83:3000/Clases');
    const usuarios = await response.json();
    this.setState({data: usuarios});
    console.log(JSON.stringify(data));
  }
  
  componentDidMount()
{
  this.fetchData();
}
render(){
  return (
    <Container>
      <Header
        linearGradientProps={{
          colors: ["#7444E8", "#B43DF3"],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 }
        }}
        centerComponent={<Bar>IDENTITIC</Bar>}
        rightComponent={
          <MaterialCommunityIcons
            name="message-reply"
            size={28}
            color={"#FFF"}
            style={{ position: "absolute", right: 10, top: -15 }}
          />
        }
      />
      <ClassBenefit image={require("../assets/class.jpg")} caption={"Clases"} />
      <ScrollView
        horizontal={true}
        style={{ paddingBottom: 15, marginEnd: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        <FlatList
          horizontal = {true}
          data={this.state.data}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) =>
                <Clase
                 
                  materia={item.materia}
                  name={item.usuario}
                  image= {require("../assets/avatar.jpg")}
                  escuela = {clases.escuela}
                  amount={item.identibits + " Idtb disponibles"}
                  topic={item.tema}
                  days={item.dias_disp}
                />
          }      
        />

      </ScrollView>
    </Container>
  );
}}

const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
`;

const Bar = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: 600;
`;
const clases = [
  {
    //materia: item.materia,
    //name: "Joaquin Polonuer",
    //image: require("../assets/avatar.jpg"),
    escuela: "Ort sede Belgrano",
    //topic: item.tema,
    //amount: "125 Idtb Disponibles",
    //days: item.dias_disp
  },
  {
    materia: "matematica",
    name: "Gonzalo Waisman",
    image: require("../assets/avatar.jpg"),
    escuela: "Ort sede Belgrano",
    topic: "Tema: Derivadas e integrales, calculo, algebra",
    amount: "235 Idtb Disponibles",
    days: "Lunes, Martes y Jueves"
  },
  {
    materia: "matematica",
    name: "Facundo Moreno",
    image: require("../assets/avatar.jpg"),
    escuela: "Ort sede Belgrano",
    topic: "Tema: Geometria, angulos, trigonometria, semejanza y Pitagoras",
    amount: "220 Idtb Disponibles",
    days: "Lunes, Martes y Jueves"
  }
];
