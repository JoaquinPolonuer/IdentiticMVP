import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";
import { Header, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import CardPremios from "../components/CardPremios";
import styled from "styled-components";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default class Premios extends React.Component {
  static navigationOptions = {
    header: null,
    showIcon: true
  };

  render() {
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
        <ContainerPerfil>
          <Avatar source={require("../assets/wpPremios/identibit.png")} />
          <Title>150 IDTB disponibles</Title>
          <Boton onPress={() => console.log()}>
            <TextBot>Ver como los acumule</TextBot>
          </Boton>
        </ContainerPerfil>

        <ScrollView>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <View style={{ flexDirection: "row" }}>
              <CardPremios
                title="Comida"
                image={require("../assets/wpPremios/comida.jpg")}
                caption="React Native"
                logo={require("../assets/logo-react.png")}
                subtitle="5 of 12 sections"
              />
              <CardPremios
                title="Ropa"
                image={require("../assets/wpPremios/ropa.jpg")}
                caption="React Native"
                logo={require("../assets/logo-react.png")}
                subtitle="5 of 12 sections"
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <CardPremios
                title="Apps"
                image={require("../assets/background1.jpg")}
                caption="React Native"
                logo={require("../assets/logo-react.png")}
                subtitle="5 of 12 sections"
              />

              <CardPremios
                title="Espectáculos"
                image={require("../assets/background1.jpg")}
                caption="React Native"
                logo={require("../assets/logo-react.png")}
                subtitle="5 of 12 sections"
              />
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
`;

const Bar = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: 600;
`;
const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  left: 10%;
  top: 25%;
  position: relative;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 17px;
  margin-left: 20px;
  margin-bottom: 0px;
  text-transform: uppercase;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #b8bece;
  font-weight: 500;
  left: 38%;
  bottom: 35%;
`;

const Name = styled.Text`
  font-size: 24px;
  color: #3c4560;
  font-weight: bold;
  margin-left: 30px;
`;

const Boton = styled.TouchableOpacity`
  background: #7444e8;
  height: 40px;
  width: 170px;
  border-radius: 5px;
  justify-content: center;
  left: 42%;
  bottom: 25%;
`;
const TextBot = styled.Text`
  font-size: 13px;
  color: whitesmoke;
  font-weight: 600;
  text-align: center;
`;

const ContainerPerfil = styled.View`
  width: 90%;
  height: 120px;
  position: relative;
  left: 5%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  elevation: 2;
  margin-top: 20px;
  background: #ffffff;
  border-radius: 5px;
`;
