import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const Beneficio = props => (
  <Container>
    <Content>
      <Wrapper>
        <Caption>{props.materia}</Caption>
      </Wrapper>
    </Content>
    <Row>
      <Information>
        <ImContainer>
          <ProfileIm source={props.image} />
        </ImContainer>
        <ProfileName>{props.name}</ProfileName>
        <ProfileSchool>{props.escuela}</ProfileSchool>
        <Idtb>{props.amount}</Idtb>
      </Information>
    </Row>
    <Row>
      <Topics>
        <TopDescription>{props.topic}</TopDescription>
      </Topics>
    </Row>
    <Row>
      <Coordinate>
        <CoordText>Canjear</CoordText>
      </Coordinate>
    </Row>
  </Container>
);

export default Beneficio;

const Content = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-style: solid;

  border-bottom-width: 1px;
  border-color: #c0c0c0;
`;

const Caption = styled.Text`
  color: #6658e4;
  font-size: 20px;
  align-self: center;
  text-align: center;
  font-weight: 600;
  text-transform: capitalize;
`;

const Wrapper = styled.View`
  margin-left: 0px;
  justify-content: center;
  align-items: center;
`;
const Row = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 1;
  /* border-style: solid;

  border-bottom-width: 1px;
  border-color: #c0c0c0; */
`;
const Container = styled.View`
  background: white;
  width: 320px;
  height: 380px;
  border-radius: 5px;
  left: 0%;
  margin: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  elevation: 2;
`;
const Information = styled.View`
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0px;
  bottom: 10px;
`;
const Topics = styled.View`
  width: 270px;
  position: relative;
  top: 82;
  align-items: center;
  flex-direction: column;
`;
const Coordinate = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 130px;
  top: 55;
  background: #fe7282;
  border-radius: 10px;
`;
const ProfileIm = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;
const ProfileName = styled.Text`
  width: 170px;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  color: #6d6d6d;
`;
const ProfileSchool = styled.Text`
  width: 270px;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 0px;
  color: #979797;
`;
const Idtb = styled.Text`
  margin-top: 0px;
  color: #6658e4;
  font-size: 20;
  font-weight: 600;
`;
const TopDescription = styled.Text`
  color: #2c2c2c;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;
const CoordText = styled.Text`
  color: white;
`;
const ImContainer = styled.View`
  width: 120%;
  height: 85px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;

  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 0px;
  margin-bottom: 8px;
`;
