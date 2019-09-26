import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import { Header, SearchBar } from "react-native-elements";
import IdentiticHeader from '../components/IdentiticHeader';
import styled from "styled-components";
import SchoolName from "../components/SchoolName";
import Clase from "../components/Clase";
import Ofrecer from "../components/Ofrecer";

import Subject from "../components/Subjects";
import LinearGradient from "react-native-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ClassBenefit from "../components/ClassBenefit";
import Beneficio from "../components/Beneficio";

export default function PremiosCategoria() {
  return (
    <Container>
      <IdentiticHeader />
      
      <ClassBenefit
        image={require("./assets/espectaculos.jpg")}
        caption={"Espectaculos"}
      />
      <ScrollView
        horizontal={true}
        style={{ paddingBottom: 15, marginEnd: 4 }}
        showsHorizontalScrollIndicator={false}
      >
        {clases.map((card, index) => (
          <Beneficio
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
    materia: "Cine",
    name: "Cines Showcase",
    image: require("./assets/cine.jpg"),
    escuela: "2x1 En todas las sucursales",
    topic: "Presentando el cupon obtendras un 2x1 para cualquier pelicula",
    amount: "Por 125 Idtb",
    logo: require("./assets/logo-react.png")
  },
  {
    materia: "Ciencia",
    name: "Planetario",
    image: require("./assets/planetario.jpg"),
    escuela: 'Entrada para "El Principito"',
    topic: "Valido los fines de semana ",
    amount: "Por 235 Idtb",
    logo: require("./assets/logo-react.png")
  },
  {
    materia: "Computacion",
    name: "Ekoparty security conference",
    image: require("./assets/ekoparty.jpg"),
    escuela: "20% de descuento en entradas",
    topic: "Valido hasta el 24/7",
    amount: "Por 400 Idtb",
    logo: require("./assets/logo-react.png")
  }
];
