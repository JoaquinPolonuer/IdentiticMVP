import React from "react";
import { ScrollView, SafeAreaView, Text, TextInput, View, TouchableOpacity} from "react-native";
import { Header, SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import Card from "../components/Card";
import styled from "styled-components";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default class Premios extends React.Component {
    static navigationOptions = {
        header: null,
        showIcon: true
      };
   
render(){
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
          <Avatar source={require("../assets/avatar.jpg")} />
          <Title>Tenes 10 Identibits</Title>
          <Boton  onPress={() => console.log()}
            >
              <TextBot>Conseguir Identibits</TextBot>
            </Boton>     
      </TitleBar>
        
      <ScrollView>
        <View style={{flexDirection:"column",flex:1}}>
      <View style={{  flexDirection: "row" }}>
          <Card
            title="Librerias"
            image={require("../assets/background2.jpg")}
            caption="React Native"
            logo={require("../assets/logo-react.png")}
            subtitle="5 of 12 sections"
          />
            <Card
            title="Kioscos"
            image={require("../assets/background2.jpg")}
            caption="React Native"
            logo={require("../assets/logo-react.png")}
            subtitle="5 of 12 sections"
          />
          </View>
          <View style={{ flexDirection: "row" }}>
          <Card
            title="Fotocopias"
            image={require("../assets/background1.jpg")}
            caption="React Native"
            logo={require("../assets/logo-react.png")}
            subtitle="5 of 12 sections"
          />
          
      
          <Card
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
  width: 80px;
  height: 80px;
  background-color: black;
  border-radius: 40px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
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
  margin-left: 30px;
`;

const Name = styled.Text`
  font-size: 24px;
  color: #3c4560;
  font-weight: bold;
  margin-left: 30px;
`;


const TitleBar = styled.View`
  width: 100%;
  margin-top: 13px;
  margin-bottom: 30px;
  padding-left: 80px;
`;
const Boton = styled.TouchableOpacity`
  background: #7444E8;
  height: 40px;
  width: 145px;
  border-radius: 7px;
  justify-content: center;
  margin-left: 55px;
  margin-top: 10px;


`;
const TextBot = styled.Text`
  font-size: 13px;
  color: whitesmoke;
  font-weight: 600;
  text-align: center;
`;