import React from "react";
import styled from "styled-components";
import {} from "react-native-elements";

const ChatPersona = props => (
  <Container>
    <Nombre>{props.nombre}</Nombre>
    <Avatar source={props.image} />
    <Preview>{props.preview}</Preview>
  </Container>
);

export default ChatPersona;

const Container = styled.TouchableOpacity`
  position: absolute;
  width: 90%;
  height: 80px;
  overflow: hidden;
  left: 5%;
  margin-top: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const Nombre = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 18px;
  top: 20%;
  left: 30%;
  width: 100%;
`;

const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  background-color: black;
  border-radius: 30px;
  position: absolute;
  left: 5%;
  top: 12%;
`;

const Preview = styled.Text`
  color: black;
  font-size: 12px;
  top: 23%;
  left: 30%;
  width: 200px;
`;
