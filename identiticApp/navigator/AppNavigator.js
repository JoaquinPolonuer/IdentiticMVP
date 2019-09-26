import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Gestion from '../screens/Gestion'
import Clases from '../screens/Clases';
import BuscarClases from '../screens/BuscarClases';
import App from '../app';
import Profile from '../screens/Profile';


const AppNavigator = createStackNavigator({

    Home: Home,
    LogIn: App,
    Registro: Registro,
    Gestion: Gestion,
    Clases: Clases,
    BuscarClases: BuscarClases,
    Profile: Profile
}); 

export default createAppContainer(AppNavigator);