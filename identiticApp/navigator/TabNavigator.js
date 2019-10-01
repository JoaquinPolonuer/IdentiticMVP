import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from "../screens/Home";
import Profile from "../screens/Profile";
import Gestion from '../screens/Gestion';
import BuscarClases from '../screens/BuscarClases';


const HomeStack = createStackNavigator({
    Home: HomeScreen,
    BuscarClases: BuscarClases
  });

  HomeStack.navigationOptions = {
      tabBarLabel: "Home",
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