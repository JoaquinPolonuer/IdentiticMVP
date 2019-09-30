import React from "react";
import styled from "styled-components";

const SubjectMarks = props => (
  <Container>
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
    <Num>{props.mark}</Num>
  </Container>
);

export default SubjectMarks;

const Container = styled.TouchableOpacity`
  flex-direction: row;
  background: white;
  height: 40px;
  right: 2%;
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
  width: 88%;
  elevation: 2;
`;

const Image = styled.Image`
  height: 36px;
  width: 36px;
  left: 10%;
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 12px;
`;
const Num = styled.Text`
  font-weight: 500;
  font-size: 10px;
  position: relative;
  color: #7c7a7a;
  left: 70%;
`;
