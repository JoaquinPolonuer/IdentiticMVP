import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Gestion from '../screens/Gestion'
import Clases from '../screens/Clases';
import App from '../index';
import Profile from '../screens/Profile';
import CrearClase from '../screens/CrearClase';
import Marks from '../screens/Marks';
import ClasesMateria from '../ClasesMateria';
import TabNavigator from "./TabNavigator";

const AppNavigator = createStackNavigator({

    Home: Home,
    LogIn: App,
    Gestion: Gestion, 
    Clases: Clases,
    CrearClase: CrearClase,
    VerClases: ClasesMateria,
    Profile: Profile,
    Calificaciones: Marks
}); 


export default createAppContainer(TabNavigator);