import React from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import { Header, SearchBar } from "react-native-elements";
import styled from "styled-components";
import SchoolName from "./components/SchoolName";
import Card from "./components/Card";
import Card5 from "./components/Card5";

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
            name="message-reply"
            size={28}
            color={"#FFF"}
            style={{ position: "absolute", right: 10, top: -15 }}
          />
        }
      />
      <ScrollView>
        <SchoolName
          image={require("./assets/ort.jpg")}
          subtitle={"Mi escuela"}
          caption={"Colegio ORT Montañeses"}
        />

        <ScrollView
          horizontal={true}
          style={{ paddingBottom: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          <Card
            title="Ver Clases"
            image={require("./assets/background2.jpg")}
            caption="React Native"
            logo={require("./assets/logo-react.png")}
            subtitle="5 of 12 sections"
          />
          <Card
            title="Solicitar      Clases"
            image={require("./assets/background1.jpg")}
            caption="React Native"
            logo={require("./assets/logo-react.png")}
            subtitle="5 of 12 sections"
          />
        </ScrollView>
        <Card5
          title="Ofrecer Clases"
          image={require("./assets/background3.jpg")}
          caption="React Native"
          logo={require("./assets/logo-react.png")}
          subtitle="5 of 12 sections"
        />
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
