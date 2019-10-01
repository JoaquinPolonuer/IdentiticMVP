import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from "../screens/Home";
import Profile from "../screens/Profile";
import Gestion from '../screens/Gestion';
import BuscarClases from '../screens/BuscarClases';
import Icon from 'react-native-vector-icons/FontAwesome';



const HomeStack = createStackNavigator({
    Home: HomeScreen,
    BuscarClases: BuscarClases
  });

  HomeStack.navigationOptions = {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={30} color="black" />)
  }
  
  const Perfil = createStackNavigator({
    Profile: Profile
  });
  
  const Management = createStackNavigator({
    Gestion: Gestion
  });

  const TabNavigator = createBottomTabNavigator({
    HomeStack,
    Perfil,
    Management
  });
  
  export default TabNavigator;