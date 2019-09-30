import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const Card2 = props => (
  <Container>
    <Image source={props.image} />
    <Title>{props.title}</Title>
  </Container>
);

export default Card2;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 40px;
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
  width: 140px;
  height: 75;
  right: 6%;
  bottom: 10%;
  margin-top: 20px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  elevation: 3;
`;

const Cover = styled.View`
  width: 100%;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 12px;
  margin-left: 10px;
  width: 170px;
`;
