import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TextInput
} from "react-native";
import { Header } from "react-native-elements";
import styled from "styled-components";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ClasesMaterias from "../components/ClasesMaterias";
import Icon from "react-native-vector-icons/Ionicons";

const data = [
  {
    key: 0,
    title: "Matematica",
    image: require("../assets/background2.jpg")
  },
  {
    key: 1,
    title: "Arte",
    image: require("../assets/background2.jpg")
  },
  {
    key: 2,
    title: "Quimica",
    image: require("../assets/background2.jpg")
  },
  {
    key: 3,
    title: "Geografia",
    image: require("../assets/background2.jpg")
  },
  {
    key: 4,
    title: "Historia",
    image: require("../assets/background2.jpg")
  },
  {
    key: 5,
    title: "Lengua",
    image: require("../assets/background2.jpg")
  },
  {
    key: 6,
    title: "Formacion etica",
    image: require("../assets/background2.jpg")
  },
  {
    key: 7,
    title: "Fisica",
    image: require("../assets/background2.jpg")
  }

  // { key: 'K' },
  // { key: 'L' },
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;

export default class BuscarClases extends React.Component {
  static navigationOptions = {
    header: null
};
  
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return <ClasesMaterias key={index} title={item.title} image={item.image} />;
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
        <ScrollView>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                  height: 45,
                  padding: 10,
                  top: 15,
                  borderRadius: 5,
                  marginHorizontal: 20,
                  shadowOffset: { width: 0, height: 0 },
                  shadowColor: "black",
                  shadowOpacity: 0.2,
                  elevation: 1,
                  marginBottom: 15
                }}
              >
                <Icon name="ios-search" size={20} style={{ top: 3 }} />
                <TextInput
                  placeholder="Buscar clases"
                  placeholderTextColor="grey"
                  style={{
                    flex: 1,
                    fontWeight: "500",
                    backgroundColor: "white",
                    left: 10,
                    top: 3,
                    height: 20
                  }}
                />
              </View>
            </View>
          </SafeAreaView>
          <FlatList
            data={formatData(data, numColumns)}
            style={styles.container}
            renderItem={this.renderItem}
            numColumns={numColumns}
            contentContainerStyle={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          />
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  },
  item: {
    backgroundColor: "#4D243D",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    height: Dimensions.get("window").width / numColumns // approximate a square
  },
  itemInvisible: {
    backgroundColor: "transparent"
  },
  itemText: {
    color: "#fff"
  }
});

const Bar = styled.Text`
  font-size: 25px;
  color: #fff;
  font-weight: 600;
`;
const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
`;
