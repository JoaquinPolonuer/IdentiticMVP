import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const Card = props => (
  <Container>
    <Title>{props.title}</Title>
  </Container>
);

export default Card;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;
const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;
const Subtitle = styled.Text`
  color: #b8bece;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 4px;
`;
const Wrapper = styled.View`
  margin-left: 10px;
`;
const Container = styled.TouchableOpacity`
  width: 43.5%;
  height: 100px;
  margin: 3.5px;
  left: 10%;
  border-radius: 5px;
  background-color: #7444e8;

  overflow: hidden;
  margin-top: 60px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  elevation: 3;
`;

const Cover = styled.View`
  width: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;
