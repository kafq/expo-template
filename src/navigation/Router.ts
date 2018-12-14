import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import ThreadsScreen from '../screens/ThreadsScreen';
import LoginScreen from '../screens/LoginScreen';

export const NonLoggedAppNavigator = () => createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      title: 'Login',
    },
    // headerMode: 'none',
  },
);

const ThreadsNavigator = createStackNavigator({
  Threads: ThreadsScreen,
})

export const LoggedAppNavigator = () => createSwitchNavigator(
  {
    Threads: ThreadsNavigator,
  },
  {
    initialRouteName: 'Threads',
  },
);
