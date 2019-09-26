import React from "react";
import styled from "styled-components";

const ClassBenefit = props => (
  <Container>
    <Content>
      <Wrapper>
        <Caption>{props.caption}</Caption>
      </Wrapper>
    </Content>
    <Cover>
      <Image source={props.image} />
    </Cover>
  </Container>
);

export default ClassBenefit;

const Content = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-items: center;
  height: 50px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;
const Caption = styled.Text`
  color: #6658e4;
  font-size: 25px;
  align-self: center;
  text-align: center;
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
  margin-left: 0px;
  justify-content: center;
  align-items: center;
`;
const Container = styled.View`
  width: 90%;
  left: 5%;
  position: relative;
  elevation: 2;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin-top: 20px;
  background: #ffffff;
  border-radius: 5px;
`;

const Cover = styled.View`
  width: 100%;
  height: 90px;
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  overflow: hidden;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;
