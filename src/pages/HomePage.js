import React from 'react';
import {View, Text} from 'native-base';
import Touch from '../components/Touch';
import {connect} from 'dva/mobile';

class HomePage extends React.Component {

  static route = {
    navigationBar: {
      title: 'Home'
    }
  };

  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.container}>
        <Touch onPress={() => navigator.push('counter')}>
          <Text>Click on the upper left corner to navigate.</Text>
        </Touch>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
};

export default connect(({ count }) => ({ count }))(HomePage);