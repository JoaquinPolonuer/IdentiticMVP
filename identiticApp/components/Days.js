import React from "react";
import styled from "styled-components";
import { Animated } from "react-native";

class Days extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <Cover>
          <Day>J</Day>
        </Cover>
      </Container>
    );
  }
}

export default Days;

const Container = styled.View`
  background: white;
  width: 30;
  height: 30;
  align-items: center;
  justify-content: center;
`;

const Cover = styled.View``;

const Day = styled.Text``;
