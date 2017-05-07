import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import './pages/HomePage';
import Router from './Router';
import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

class App extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute="home" />
      </NavigationProvider>
    );
  }
}

export default App;
