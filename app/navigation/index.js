import { StackNavigator } from 'react-navigation';
import screens from '../screens';

const { Login, Home } = screens;

export default StackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Login',
  },
);
