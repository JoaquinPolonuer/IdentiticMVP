import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from "../screens/Home";
import Profile from "../screens/Profile";
import Gestion from '../screens/Gestion';
import BuscarClases from '../screens/BuscarClases';
import { Ionicons } from '@expo/vector-icons';
import Premios from '../screens/Premios'
import Clases from '../screens/Clases'
import ListaClases from '../screens/ListClases';
import CrearClase from '../screens/CrearClase';

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";


const HomeStack = createStackNavigator({
    Home: HomeScreen,
    BuscarClases: BuscarClases,
    VerClases: ListaClases
  });

  HomeStack.navigationOptions = {
      tabBarLabel: "Home",
      showLabel: false,
      tabBarIcon: ({ focused }) => (
        <Ionicons
         name="ios-home"
         size={26} 
         color={focused ? activeColor : inactiveColor} 
         
        />
      )
  }
  
  const Perfil = createStackNavigator({
    Profile: Profile
  });

  Perfil.navigationOptions = {
    tabBarLabel: "Perfil",
    showLabel: false
}
  
  const Management = createStackNavigator({
    Gestion: Gestion
  });

  Management.navigationOptions = {
    tabBarLabel: "Gestion",
    showLabel: false
}

  const Crear = createStackNavigator({
    Clases: Clases,
    CrearClase: CrearClase
  });

  Crear.navigationOptions = {
    tabBarLabel: "Clases",
    showLabel: false
}

  const Recompensas = createStackNavigator({
    Premios: Premios
  });

  Recompensas.navigationOptions = {
    tabBarLabel: "Premios",
    showLabel: false
}


  const TabNavigator = createBottomTabNavigator({
    HomeStack,
    Crear,
    Recompensas,
    Management,
    Perfil
  });
  
  export default TabNavigator;