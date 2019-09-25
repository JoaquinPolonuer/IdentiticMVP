import React from "react";
import styled from "styled-components";

const Ofrecer = props => (
  <Container>
    <Title>{props.title}</Title>
  </Container>
);

export default Ofrecer;

const Content = styled.View`
  padding-left: 20px;
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
  width: 330px;
  height: 80px;
  background-color: white;
  margin-left: 18px;
  margin-bottom: 4px;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  elevation: 3;
`;

const Cover = styled.View`
  width: 100%;
`;

const Title = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 24px;
  margin-top: 20px;
  left: 5%;
  width: 170px;
`;
