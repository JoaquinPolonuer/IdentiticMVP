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
            top: 15,
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
        horizontal={false}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {ChatPersonas.map((chatPersona, index) => (
          <ChatPersona
            key={index}
            nombre={chatPersona.text}
            image={chatPersona.image}
            preview={chatPersona.preview}
          />
        ))}
      </ScrollView>
    </Container>
  );
}

const ChatPersonas = [
  {
    image: require("./assets/avatar.jpg"),
    text: "Gonzalo Waisman",
    preview: "Sos el CEO de Identitic?"
  },
  {
    image: require("./assets/avatar.jpg"),
    text: "Santino DeadNigga",
    preview: "Sorry, i dont speak White Power"
  },
  {
    image: require("./assets/avatar.jpg"),
    text: "Maximo Sucari",
    preview: "Que haces papa, te quedan TOSTADAS??"
  },
  {
    image: require("./assets/avatar.jpg"),
    text: "Agustin Rombola",
    preview: "Fichate las tetas de Sigrid, ALTA MILF"
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
