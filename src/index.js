import React from 'react';
import Expo, {AppLoading} from 'expo';
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

  state = {
    isReady: false
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({isReady: true});
  }

  render(){
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return(
      <Drawer/>
    )
  }

}

export default App;
