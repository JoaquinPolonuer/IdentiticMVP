import React from "react";
import { ScrollView, SafeAreaView, Text, TextInput, View } from "react-native";
import { Header, SearchBar } from "react-native-elements";
import styled from "styled-components";
import SchoolName from "../components/SchoolName";
import Card from "../components/Card";
import Icon from "react-native-vector-icons/Ionicons";
import Ofrecer from "../components/Ofrecer";

import Subject from "../components/Subjects";
import LinearGradient from "react-native-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Clases() {
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
        <SafeAreaView style={{ flex: 1 }}>
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
                placeholder="Buscar clases"
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
        </SafeAreaView>
        <SchoolName
          image={require("./assets/ort.jpg")}
          subtitle={"Mi escuela"}
          caption={"Colegio ORT Montañeses"}
        />

        <View style={{ flex: 1, flexDirection: "row" }}>
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
        </View>
        <Ofrecer
          title="Ofrecer Clases"
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
