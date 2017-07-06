import React from 'react';
import Expo from 'expo';
import { DrawerNavigator } from 'react-navigation';
import './pages/HomePage';
import router from './router';

const Drawer = DrawerNavigator(
  router,
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: 'cadetblue',
    },
  }
);

class App extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render(){
    return(
      <Drawer/>
    )
  }

}

export default App;
