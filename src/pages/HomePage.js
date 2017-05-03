import React from 'react';
import {
  Text,
  View,
} from 'react-native';


export default class HomePage extends React.Component {
  static route = {
    navigationBar: {
      title: 'Home',
    }
  };

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>Click here to navigate!</Text>
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigator.push('home');
  }
}