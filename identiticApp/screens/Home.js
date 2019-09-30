import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import { Header } from "react-native-elements";
import styled from "styled-components";
import CardBuscarClases from "../components/CardBuscarClases";
import Card2 from "../components/Card2";

import Subject from "../components/Subjects";
import LinearGradient from "react-native-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function AApp() {
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
        <TitleBar>
          <Avatar source={require("./assets/avatar.jpg")} />
          <Title>Bienvenido,</Title>
          <Name>Joaquin Polonuer</Name>
        </TitleBar>

        <ScrollView
          horizontal={true}
          style={{ bottom: 100 }}
          showsHorizontalScrollIndicator={false}
        >
          <CardBuscarClases
            title="Buscar         Clases"
            image={require("./assets/class.jpg")}
            caption="React Native"
            logo={require("./assets/logo-react.png")}
            subtitle="5 of 12 sections"
          />
          <ScrollView
            style={{ width: 250 }}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <Card2
              title="Practica    diaria"
              image={require("./assets/practice.jpg")}
              caption="React Native"
              logo={require("./assets/logo-react.png")}
              subtitle="5 of 12 sections"
            />
            <Card2
              title="Como te sientes?"
              image={require("./assets/feel.jpg")}
              caption="React Native"
              logo={require("./assets/logo-react.png")}
              subtitle="5 of 12 sections"
            />
          </ScrollView>
        </ScrollView>
        <Subtitle>Materias de Hoy</Subtitle>

        <ScrollView
          style={{ bottom: 90 }}
          horizontal={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {subjects.map((subject, index) => (
            <Subject
              key={index}
              text={subject.text}
              image={subject.image}
              mark={subject.mark}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </Container>
  );
}

const subjects = [
  {
    image: require("./assets/ico-matematica.png"),
    text: "Matematica",
    mark: "7:45 - 9:05"
  },
  {
    image: require("./assets/ico-lengua.png"),
    text: "Lengua",
    mark: "9:20 - 10:40"
  },
  {
    image: require("./assets/ico-historia.png"),
    text: "Historia",
    mark: "10:55 - 12:15"
  },
  {
    image: require("./assets/ico-quimica.png"),
    text: "Quimica",
    mark: "13:05 - 14:30"
  }
];

const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  background-color: black;
  border-radius: 30px;
  right: 20%;
  top: 15%;
  position: relative;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: bold;
  font-size: 18px;
  bottom: 15%;
  left: 5%;
`;

const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
`;
const Title = styled.Text`
  font-style: normal;
  font-size: 18px;
  line-height: 51px;
  color: #5f5f5f;
  left: 8%;
  bottom: 25%;
`;

const Name = styled.Text`
  font-size: 18px;
  color: #3c4560;
  font-weight: bold;
  line-height: 51px;
  left: 8%;
  bottom: 44%;
`;
const Bar = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: 600;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-bottom: 50px;
  padding-left: 80px;
`;
