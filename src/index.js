import React from 'react';
import Expo from 'expo';
import { DrawerNavigator } from 'react-navigation';
import './pages/HomePage';
import router from './router';

const App = DrawerNavigator(
  router,
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: 'cadetblue',
    },
  }
);

/*class App extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    let menus = [
      {id: 'home', title: 'Home'},
      {id: 'counter', title: 'Counter'},
      {id: 'todos', title: 'Todos'},
      {id: 'axios', title: 'Axios'},
      {id: 'drawer', title: 'Drawer'}
    ];
    return (
      <NavigationProvider router={Router}>
        <DrawerNavigationLayout menus={menus} initialItem="home"/>
      </NavigationProvider>
    );
  }
}*/

export default App;
