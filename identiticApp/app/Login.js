import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import { StackNavigator } from 'react-navigation';
import App from '../index';
import Profile from '../Profile'
import AApp from "../screens/Home";

const Application = StackNavigator({
    Home: { screen: Login },
    Profile: { screen: Profile }
    }, {
        navigationOptions: {
            header: false,
        }
});
/*
state =
{
  data:[]
}

fetchData= async()=>
{
  const response = await fetch('http://localhost:3000/');
  const users = await response.json();
  this.setState({data: usuarios});
}

componentDidMount()
{
  this.fetchData();
}
*/
const { width, height } = Dimensions.get("window");
const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
  concat
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug("stop clock", stopClock(clock))),
    state.position
  ]);
}

export default class IdentiticApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

    this.buttonOpacity = new Value(1);
    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            )
          ])
      }
    ]);

    this.onCloseState = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 0, 1))
            )
          ])
      }
    ]);

    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputZindex = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, -1],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputOpacity = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.rotateCross = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [180, 360],
      extrapolate: Extrapolate.CLAMP
    });
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {

    var value = await AsyncStorage.getItem('user')
    if (value !== null) {
      this.props.navigation.navigate('Profile');
    }
  }
  
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "flex-end"
        }}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            transform: [{ translateY: this.bgY }]
          }}
        >
          <Image
            source={require("../assets/identitic.png")}
            style={{ flex: 1, height: null, width: null }}
          />
        </Animated.View>
        <View style={{ height: height / 3 }}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }]
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "400", color: "white" }}>
                Continuar
              </Text>
            </Animated.View>
          </TapGestureHandler>
          <Animated.View
            style={{
              zIndex: this.textInputZindex,
              opacity: this.textInputOpacity,
              transform: [{ translateY: this.textInputY }],
              height: height / 3,
              ...StyleSheet.absoluteFill,
              top: null,
              justifyContent: "center"
            }}
          >
            <TapGestureHandler onHandlerStateChange={this.onCloseState}>
              <Animated.View style={styles.closeButton}>
                <Animated.Text
                  style={{
                    fontSize: 15,
                    transform: [{ rotate: concat(this.rotateCross, "deg") }]
                  }}
                >
                  X
                </Animated.Text>
              </Animated.View>
            </TapGestureHandler>

            <TextInputUsername
              placeholder="Username"
              style={styles.TextInput}
              placeholderTextColor="black"
              onChangeText={ (username) => this.setState({username} ) }
            />
            <TextInputPassword
              placeholder="Password"
              style={styles.TextInput}
              placeholderTextColor="black"
              onChangeText={ (password) => this.setState({password} ) }
              secureTextEntry = {true}
            />
            <Animated.View style={styles.buttonInicio}>
              <Text style={{ fontSize: 14, fontWeight: "400", color: "white" }}>
                Iniciar Sesion
              </Text>
            </Animated.View> 
          </Animated.View>
        </View>
      </View>
    );
  }
}

export default IdentiticApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#F13564",
    height: 48,
    width: 250,
    marginHorizontal: 65,
    marginTop: 140,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.4
  },
  buttonInicio: {
    backgroundColor: "#F13564",
    touchableOpacity: true,
    height: 48,
    width: 250,
    marginHorizontal: 65,
    margin: 30,
    marginTop: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.4
  },
  TextInputUsername: {
    height: 48,
    width: 320,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    marginTop: 15,
    paddingLeft: 20,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)"
  },
  TextInputPassword: {
    height: 48,
    width: 320,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    marginTop: 15,
    paddingLeft: 20,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)"
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 250,
    left: width / 2 - 20,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.4
  }
});

login = () => {

  fetch('http://localhost:3000/Login',{
    method: 'POST',
    headers: {
      'Accept': 'Application/json',
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      username: this.state.username,
      password: this.state.password,
    })
  })
  
  .then((response) => response.json())
  .then ((res) => {

      if (res.success === true){
        AsyncStorage.setItem('usuario', res.usuario);
        this.props.navigation.navigate('Profile');
      }

      else{
          alert(res.message);
      }
  })
  .done();
}
