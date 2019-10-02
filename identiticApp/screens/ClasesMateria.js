import React from "react";
import { ScrollView, SafeAreaView, Text, TouchableOpacity} from "react-native";
import { Header, SearchBar } from "react-native-elements";
import styled from "styled-components";
import SchoolName from "../components/SchoolName";
import Clase from "../components/Clase";
import Ofrecer from "../components/Ofrecer";

import Subject from "../components/Subjects";
import LinearGradient from "react-native-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ClassBenefit from "../components/ClassBenefit";

export default function ClasesMateria() {
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
        style={{ paddingBottom: 15, marginEnd: 4 }}
        showsHorizontalScrollIndicator={false}
      >
        {clases.map((card, index) => (
          <Clase
            key={index}
            materia={card.materia}
            name={card.name}
            image={card.image}
            escuela={card.escuela}
            amount={card.amount}
            topic={card.topic}
          />
        ))}
      </ScrollView>
    </Container>
  );
}

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
    materia: "matematica",
    name: "Joaquin Polonuer",
    image: require("../assets/avatar.jpg"),
    escuela: "Ort sede Belgrano",
    topic:
      "Tema: Funcion por tamos, funciones logartimicas, analisis matematico y ecuaciones de todo tipo",
    amount: "125 Idtb Disponibles",
    logo: require("../assets/logo-react.png")
  },
  {
    materia: "matematica",
    name: "Gonzalo Waisman",
    image: require("../assets/avatar.jpg"),
    escuela: "Ort sede Belgrano",
    topic: "Tema: Derivadas e integrales, calculo, algebra",
    amount: "235 Idtb Disponibles",
    logo: require("../assets/logo-react.png")
  },
  {
    materia: "matematica",
    name: "Facundo Moreno",
    image: require("../assets/avatar.jpg"),
    escuela: "Ort sede Belgrano",
    topic: "Tema: Geometria, angulos, trigonometria, semejanza y Pitagoras",
    amount: "220 Idtb Disponibles",
    logo: require("../assets/logo-react.png")
  }
];
