import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import { Header } from "react-native-elements";
import styled from "styled-components";
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
        <Title>Calificaciones</Title>
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
      </ScrollView>
    </Container>
  );
}

const subjects = [
  {
    image: require("../assets/ico-matematica.png"),
    text: "Matematica",
    mark: "10"
  },
  {
    image: require("../assets/ico-lengua.png"),
    text: "Lengua",
    mark: "7"
  },
  {
    image: require("../assets/ico-historia.png"),
    text: "Historia",
    mark: "8"
  },
  {
    image: require("../assets/ico-quimica.png"),
    text: "Quimica",
    mark: "10"
  },
  {
    image: require("../assets/ico-quimica.png"),
    text: "Fisica",
    mark: "10"
  },
  {
    image: require("../assets/ico-quimica.png"),
    text: "Arte",
    mark: "8"
  },
  {
    image: require("../assets/ico-quimica.png"),
    text: "Biologia",
    mark: "8"
  },
  {
    image: require("../assets/ico-quimica.png"),
    text: "Educacion Fisica",
    mark: "10"
  },
  {
    image: require("../assets/ico-quimica.png"),
    text: "Formacion Etica",
    mark: "9"
  },
  {
    image: require("../assets/ico-quimica.png"),
    text: "Geografia",
    mark: "9"
  },
  {
    image: require("../assets/ico-quimica.png"),
    text: "Ingles",
    mark: "8"
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
