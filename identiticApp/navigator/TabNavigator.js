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
  
  const CoursesStack = createStackNavigator({
    Profile: Profile
  });
  
  const ProjectsStack = createStackNavigator({
    Gestion: Gestion
  });

  const TabNavigator = createBottomTabNavigator({
    HomeStack,
    CoursesStack,
    ProjectsStack
  });
  
  export default TabNavigator;