import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Gestion from '../screens/Gestion'
import Clases from '../screens/Clases';
import BuscarClases from '../screens/BuscarClases';
import App from '../index';
import Profile from '../screens/Profile';
import CrearClase from '../screens/CrearClase';
import Marks from '../screens/Marks';
import ListaClases from '../screens/ListClases';
import TabNavigator from "./TabNavigator";

const AppNavigator = createStackNavigator({

    Home: Home,
    LogIn: App,
    Gestion: Gestion,
    Clases: Clases,
    CrearClase: CrearClase,
    BuscarClases: BuscarClases,
    VerClases: ListaClases,
    Profile: Profile,
    Calificaciones: Marks
}); 


export default createAppContainer(TabNavigator);