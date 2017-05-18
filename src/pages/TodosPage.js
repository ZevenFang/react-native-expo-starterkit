import React from 'react';
import {Container, Content, View, Text, Icon} from 'native-base';
import {connect} from 'dva/mobile';
import {TabNavigation, TabNavigationItem as TabItem} from '@expo/ex-navigation';

class TodosPage extends React.Component {

  static route = {
    navigationBar: {
      title: 'Todos'
    }
  };

  render() {

    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="home">
        <TabItem
          id="home"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Icon name="list" style={{color: isSelected?"white":"gray"}} /> }>
          <TodosList/>
        </TabItem>
        <TabItem
          id="posts"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Icon name="time" style={{color: isSelected?"white":"lightblue"}} /> }>
          <TodosList/>
        </TabItem>
        <TabItem
          id="profile"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Icon name="checkmark-circle" style={{color: isSelected?"white":"lightgreen"}} /> }>
          <TodosList/>
        </TabItem>
      </TabNavigation>
    )
  }

}

class TodosList extends React.Component {

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <View style={{alignItems: 'center'}}>
            <Text>Here are ready to build a TodoMVC application.</Text>
          </View>
        </Content>
      </Container>
    )
  }

}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  selectedTab: {
    backgroundColor: '#AAA'
  }
};

export default connect(({todos})=>({todos}))(TodosPage);