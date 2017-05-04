import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import {connect} from 'dva/mobile';

/*class HomePage extends React.Component {
  render() {
    const { dispatch, count } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Count: { count }
        </Text>
        <TouchableHighlight onPress={() => { dispatch({ type: 'count/add' }) }}>
          <Text>Add</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { dispatch({ type: 'count/addDelay' }) }}>
          <Text>Delay Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}*/

const HomePage = connect(({ count }) => ({ count }))((props) => {
  const { dispatch, count } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Count: { count }
      </Text>
      <TouchableHighlight onPress={() => { dispatch({ type: 'count/add' }) }}>
        <Text>Add</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => { dispatch({ type: 'count/addDelay' }) }}>
        <Text>Delay Add</Text>
      </TouchableHighlight>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default HomePage;