import React from "react";
import {
  TextInput,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity
} from "react-native";
import { Header } from "react-native-elements";
import styled from "styled-components";
import CardBuscarClases from "../components/CardBuscarClases";
import Card2 from "../components/Card2";
import Input from "../components/TextInput";

import Subject from "../components/Subjects";
import LinearGradient from "react-native-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import SubjectMarks from "../components/Subjects";
import { Dropdown } from "react-native-material-dropdown";

export default class AApp extends React.Component {
  state = { tema: "" };

  render() {
    let data = [
      {
        value: "Matematica"
      },
      {
        value: "Lengua"
      },
      {
        value: "Geografia"
      }
    ];
    return (
      <Container>
        <Header
          linearGradientProps={{
            colors: ["#7444E8", "#B43DF3"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 }
          }}
          centerComponent={<Bar>IDENTITIC</Bar>}
          rightComponent={
            <MaterialCommunityIcons
              name="message-reply"
              size={28}
              color={"#FFF"}
              style={{ position: "absolute", right: 10, top: -15 }}
            />
          }
        />
        <TitleBar>
          <Title>Ofrecer Clases</Title>
        </TitleBar>
        {/* contentContainerStyle={{ alignItems: "center" }} */}
        <ScrollView>
          <Dias>
            <Texto>Dias</Texto>
            <Row>
              <DayButton>
                <NameDia>l</NameDia>
              </DayButton>
              <DayButton>
                <NameDia>m</NameDia>
              </DayButton>
              <DayButton>
                <NameDia>m</NameDia>
              </DayButton>
              <DayButton>
                <NameDia>J</NameDia>
              </DayButton>
              <DayButton>
                <NameDia>v</NameDia>
              </DayButton>
            </Row>
          </Dias>
          <Materia>
            <Texto>Materia</Texto>
            <Dropdown
              label="Materia"
              data={data}
              style={{ marginTop: 5 }}
              containerStyle={{
                marginTop: 10,
                height: 60,
                padding: 5,
                backgroundColor: "white",
                borderRadius: 10,
                flex: 1,
                justifyContent: "center"
              }}
            />
            {/*https://www.npmjs.com/package/react-native-material-dropdown*/}
          </Materia>
          <Tema>
            <Texto>Tema</Texto>
            <Input
              placeholder="ej: Expresiones racionales"
              value={this.state.tema}
              onChangeText={email => this.setState({ tema })}
            />
          </Tema>
          <Publish>
            <Boton>
              <TextBot>Publicar</TextBot>
            </Boton>
          </Publish>
        </ScrollView>
      </Container>
    );
  }
}

const subjects = [
  {
    image: require("./assets/check-mark.png"),
    text: "15/07/19",
    mark: "1"
  },
  {
    image: require("./assets/check-mark.png"),
    text: "3/08/19",
    mark: "0.5"
  },
  {
    image: require("./assets/check-mark.png"),
    text: "4/08/19",
    mark: "0.5"
  }
];

const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
`;
const Title = styled.Text`
  font-size: 30px;
  color: #6658e4;
  font-weight: 500;
`;

const Bar = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: 600;
`;

const TitleBar = styled.View`
  width: 100%;
  height: 15%;
  background: white;
  margin-bottom: 4px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  elevation: 2;
`;
const Dias = styled.View`
  padding-left: 10px;
  margin: 10px;
`;
const Tema = styled.View`
  padding-left: 20px;
  height: 200px;
  margin-bottom: -70;
`;
const Materia = styled.View`
  padding-left: 10px;
  margin: 10px;
`;
const Publish = styled.View`
  justify-content: center;
  align-items: center;
`;
const Texto = styled.Text`
  font-size: 18px;
  color: #979797;
  font-weight: 600;
`;
const TextBot = styled.Text`
  font-size: 18px;
  color: whitesmoke;
  font-weight: 600;
  text-align: center;
`;
const Boton = styled.TouchableOpacity`
  background: #e53e51;
  height: 40px;
  width: 140px;
  border-radius: 7px;
  justify-content: center;
`;
const DayButton = styled.TouchableOpacity`
  height: 52;
  width: 52;
  background: white;
  margin: 5px;
  border-radius: 30;
  justify-content: center;
  align-items: center;
`;
const NameDia = styled.Text`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
  color: #979797;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
`;
