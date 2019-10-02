import React from "react";
import styled from "styled-components";

const Subject = props => (
  <Container>
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
  </Container>
);

export default Subject;

const Container = styled.View`
  flex-direction: row;
  background: white;
  height: 60px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  align-items: center;
  margin: 4px 0px;
  width: 93%;
  elevation: 2;
`;

const Image = styled.Image`
  height: 36px;
  width: 36px;
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 19px;
  margin-left: 12px;
`;

