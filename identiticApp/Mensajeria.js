import React from "react";
import { ScrollView, SafeAreaView, Text, TextInput, View } from "react-native";
import { Header, SearchBar } from "react-native-elements";
import styled from "styled-components";
import SchoolName from "./components/SchoolName";
import Card from "./components/Card";
import ChatPersona from "./components/ChatPersona";
import Icon from "react-native-vector-icons/Ionicons";
import Subject from "./components/Subjects";
import LinearGradient from "react-native-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
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
            name="email-plus"
            size={28}
            color={"#FFF"}
            style={{ position: "absolute", right: 10, top: -15 }}
          />
        }
      />
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            height: 45,
            padding: 10,
            top: 20,
            borderRadius: 5,
            marginHorizontal: 20,
            shadowOffset: { width: 0, height: 0 },
            shadowColor: "black",
            shadowOpacity: 0.2,
            elevation: 1,
            marginBottom: 15
          }}
        >
          <Icon name="ios-search" size={20} style={{ top: 3 }} />
          <TextInput
            placeholder="Buscar Mensajes"
            placeholderTextColor="grey"
            style={{
              flex: 1,
              fontWeight: "500",
              backgroundColor: "white",
              left: 10,
              top: 3,
              height: 20
            }}
          />
        </View>
      </View>
      <ScrollView
        vertical={true}
        contentContainerStyle={{ alignItems: "center" }}
        style={{ bottom: 35 }}
      >
        {ChatPersonas.map((chatPersona, index) => (
          <ChatPersona
            key={index}
            nombre={chatPersona.text}
            image={chatPersona.image}
            descripcion={chatPersona.descripcion}
          />
        ))}
      </ScrollView>
    </Container>
  );
}

const ChatPersonas = [
  {
    image: require("./assets/waisman.jpg"),
    text: "Gonzalo Waisman",
    descripcion: "Entonces a las 9, perfecto!"
  },
  {
    image: require("./assets/palmieri.png"),
    text: "Santino Palmieri",
    descripcion: "Me pasas el resumen de Lengua"
  },
  {
    image: require("./assets/maxi.jpg"),
    text: "Maximo Sucari",
    descripcion: "Tranquilo, ahi me mandaron los IDTC"
  },
  {
    image: require("./assets/avatar.jpg"),
    text: "Agustin Rombola",
    descripcion: "Tu nota del recuperatorio esta aprobada"
  }
];

const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
`;

const Bar = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: 600;
`;
