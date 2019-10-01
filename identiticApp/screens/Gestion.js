import React, { Component } from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import { Header } from "react-native-elements";
import styled from "styled-components";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import ComponentGestion from "../components/CompGestion";

import Subject from "../components/Subjects";
import LinearGradient from "react-native-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default class Gestion extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
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

        <ScrollView>
          {gestiones.map((gestion, index) => (
            <ComponentGestion key={index} image={gestion.image} title={gestion.text} />
          ))}

          {/* <Gestion
          title="Lengua y literatura"
          image={require("../assets/practice.jpg")}
          c aption="React Native"
          logo={require("../assets/logo-react.png")}  
        >
        </Gestion> */}
        </ScrollView>
      </Container>
    );
  }
}

const gestiones = [
  {
    image: require("../assets/wpGestion/calificaciones.jpg"),
    text: "Calificaciones"
  },
  {
    image: require("../assets/wpGestion/inasistencias.jpg"),
    text: "Inasistencias"
  },
  {
    image: require("../assets/wpGestion/calendario.jpg"),
    text: "Calendario"
  },
  {
    image: require("../assets/wpGestion/horarios.jpg"),
    text: "Horarios"
  }
];

const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  background-color: black;
  border-radius: 40px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 17px;
  margin-left: 20px;
  margin-bottom: 0px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
`;
const Title = styled.Text`
  font-size: 20px;
  color: #b8bece;
  font-weight: 500;
  margin-left: 30px;
`;

const Name = styled.Text`
  font-size: 24px;
  color: #3c4560;
  font-weight: bold;
  margin-left: 30px;
`;
const Bar = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: 600;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 13px;
  margin-bottom: 30px;
  padding-left: 80px;
`;
