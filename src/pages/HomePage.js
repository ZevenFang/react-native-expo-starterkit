import React from 'react';
import {View, Text} from 'native-base';

class HomePage extends React.Component {

  static route = {
    navigationBar: {
      title: 'Home'
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Click on the upper left corner to navigate.</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default HomePage;