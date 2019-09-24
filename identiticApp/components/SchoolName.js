import React from "react";
import styled from "styled-components";

const SchoolName = props => (
  <Container>
    <Content>
      <Wrapper>
        <Subtitle>{props.subtitle}</Subtitle>

        <Caption>{props.caption}</Caption>
      </Wrapper>
    </Content>
    <Cover>
      <Image source={props.image} />
      <Title>{props.title}</Title>
    </Cover>
  </Container>
);

export default SchoolName;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 70px;
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
  margin-left: 0px;
`;
const Container = styled.View`
  background: white;
  width: 95%;
  border-radius: 14px;
  margin-left: 7px;
  margin-right: 7px;

  margin-top: 20px;
  margin-bottom: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  elevation: 2;
`;

const Cover = styled.View`
  width: 100%;
  height: 150px;
  border-radius: 14px;
  overflow: hidden;
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
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;
