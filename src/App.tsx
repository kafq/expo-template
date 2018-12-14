import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer, NavigationScreenProp } from 'react-navigation';
import { LoggedAppNavigator, NonLoggedAppNavigator } from './navigation/Router';
import { store } from './store'

interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>
}

export default class App extends React.Component<HomeScreenProps> {

  render() {

    const AppNavigator = true ? LoggedAppNavigator() : NonLoggedAppNavigator()
    const Container = createAppContainer(AppNavigator)
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
