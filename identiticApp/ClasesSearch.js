import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView
} from "react-native";
import { Header } from "react-native-elements";
import styled from "styled-components";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ClasesMaterias from "./components/ClasesMaterias";

const data = [
  {
    key: 0,
    title: "Matematica",
    image: require("./assets/background2.jpg")
  },
  {
    key: 1,
    title: "Arte",
    image: require("./assets/background2.jpg")
  },
  {
    key: 2,
    title: "Quimica",
    image: require("./assets/background2.jpg")
  },
  {
    key: 3,
    title: "Geografia",
    image: require("./assets/background2.jpg")
  },
  {
    key: 4,
    title: "Historia",
    image: require("./assets/background2.jpg")
  },
  {
    key: 5,
    title: "Lengua",
    image: require("./assets/background2.jpg")
  },
  {
    key: 6,
    title: "Formacion etica",
    image: require("./assets/background2.jpg")
  },
  {
    key: 7,
    title: "Fisica",
    image: require("./assets/background2.jpg")
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
export default class App extends React.Component {
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
          <FlatList
            data={formatData(data, numColumns)}
            style={styles.container}
            renderItem={this.renderItem}
            numColumns={numColumns}
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
