import React from "react";
import styled from "styled-components";
import {} from "react-native-elements";

const ChatPersona = props => (
  <Container>
    <Nombre>{props.nombre}</Nombre>
    <Descripcion>{props.descripcion}</Descripcion>
    <Avatar source={props.image} />
  </Container>
);

export default ChatPersona;

const Container = styled.TouchableOpacity`
  position: relative;
  width: 90%;
  height: 80px;
  overflow: hidden;
  margin-top: 10px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const Nombre = styled.Text`
  color: black;
  position: relative;
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
  position: relative;
  left: 5%;
  bottom: 32%;
`;

const Descripcion = styled.Text`
  color: #9a9a9a;
  position: relative;
  font-size: 12px;
  top: 25%;
  left: 30%;
  width: 80%;
`;
