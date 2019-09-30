import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import { Header } from "react-native-elements";
import styled from "styled-components";
import CardBuscarClases from "../components/CardBuscarClases";
import Card2 from "../components/Card2";

import Subject from "../components/Subjects";
import LinearGradient from "react-native-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import SubjectMarks from "../components/Subjects";

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
      <TitleBar>
        <Title>Inasistencias</Title>
      </TitleBar>

      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        {subjects.map((subject, index) => (
          <SubjectMarks
            key={index}
            text={subject.text}
            image={subject.image}
            mark={subject.mark}
          />
        ))}
        <Info>
          <Acumuladas>Acumuladas: 2</Acumuladas>
          <Limite>Limite: 15</Limite>
        </Info>
      </ScrollView>
    </Container>
  );
}

const subjects = [
  {
    image: require("./assets/check-mark.png"),
    text: "15/07/19",
    mark: "1"
  },
  {
    image: require("./assets/check-mark.png"),
    text: "3/08/19",
    mark: "0.5"
  },
  {
    image: require("./assets/check-mark.png"),
    text: "4/08/19",
    mark: "0.5"
  }
];

const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
`;
const Title = styled.Text`
  font-size: 30px;
  color: #6658e4;
  font-weight: 500;
`;

const Bar = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: 600;
`;

const TitleBar = styled.View`
  width: 100%;
  height: 15%;
  background: white;
  margin-bottom: 4px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  elevation: 2;
`;
const Acumuladas = styled.Text`
  font-size: 18px;
  color: #979797;
  font-weight: 600;
`;
const Limite = styled.Text`
  font-size: 18px;
  color: #979797;
  font-weight: 600;
`;
const Info = styled.View`
  margin-top: 10px;
`;
