import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Touch from '../components/Touch';
import {connect} from 'dva/mobile';

class HomePage extends React.Component {

  static route = {
    navigationBar: {
      backgroundColor: '#333',
      tintColor: 'white',
      title: 'Home'
    }
  };

  render() {
    const { dispatch, count, navigator } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Count: { count }
        </Text>
        <Touch onPress={() => { dispatch({ type: 'count/add' }) }}>
          <Text>Add</Text>
        </Touch>
        <Touch onPress={() => { dispatch({ type: 'count/addDelay' }) }}>
          <Text>Delay Add</Text>
        </Touch>
        <Touch onPress={() => navigator.push('tabs')}>
          <Text>To Tabs</Text>
        </Touch>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default connect(({ count }) => ({ count }))(HomePage);