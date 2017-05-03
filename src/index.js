import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './pages/HomePage';
import Router from './Router';
import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

class App extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute="home" />
      </NavigationProvider>
    );
  }
}

export default App;
