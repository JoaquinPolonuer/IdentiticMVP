import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";

export default function App() {
  return (
    <Container>
      <TitleBar>
        <Avatar source={require("./assets/avatar.jpg")} />
        <Title>Welcome back,</Title>
        <Name>Polo</Name>
      </TitleBar>
      <Subtitle>Continue Learning</Subtitle>
      <Card
        title="Styled Components"
        image={require("./assets/background2.jpg")}
        caption="React Native"
        logo={require("./assets/logo-react.png")}
        subtitle="5 of 12 sections"
      />
    </Container>
  );
}

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background-color: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
  text-transform: uppercase;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  margin-top: 50px;
  padding-left: 80px;
`;
