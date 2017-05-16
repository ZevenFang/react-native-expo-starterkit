import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Router from '../Router';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';

// Treat the DrawerNavigationLayout route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation

let defaultRouteConfig={
  navigationBar: {
    backgroundColor: '#808080',
      tintColor: 'white'
  }
};

class DrawerNavigationLayout extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  };

  render() {
    return (
      <DrawerNavigation
        id='main'
        initialItem='home'
        drawerWidth={300}
        renderHeader={this._renderHeader}
      >
        <DrawerNavigationItem
          id='home'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Home', isSelected)}
        >
          <StackNavigation
            id='home'
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('home')}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id='counter'
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle('Counter', isSelected)}
        >
          <StackNavigation
            id='counter'
            defaultRouteConfig={defaultRouteConfig}
            initialRoute={Router.getRoute('counter')}
          />
        </DrawerNavigationItem>

      </DrawerNavigation>
    );
  }

  _renderHeader = () => {
    return (
      <View style={styles.header}>
      </View>
    );
  };

  _renderTitle(text: string, isSelected: boolean) {
    return (
      <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
        {text}
      </Text>
    );
  };
}

const styles = StyleSheet.create({
  header: {
    height: 20
  },

  selectedItemStyle: {
    backgroundColor: '#808080'
  },

  titleText: {
    fontWeight: 'bold'
  },

  selectedTitleText: {
    color: 'white'
  }
});

export default DrawerNavigationLayout;