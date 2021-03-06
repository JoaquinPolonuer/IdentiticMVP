import React from "react";
import styled from "styled-components";

const ComponentGestion = props => (
  <Container>
    <Image source={props.image} />
    <Title>{props.title}</Title>
  </Container>
);

export default ComponentGestion;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 50px;
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
const Container = styled.View`
  width: 90%;
  height: 100px;
  left: 5%;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 3px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
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
  color: black;
  font-size: 28px;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 19px;
`;
