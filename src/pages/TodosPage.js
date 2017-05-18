import React from 'react';
import {Container, Content, View, Text, Icon} from 'native-base';
import {connect} from 'dva/mobile';
import {TabNavigation, TabNavigationItem as TabItem} from '@expo/ex-navigation';
import TodoItem from '../components/TodoItem';

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
        initialTab="all">
        <TabItem
          id="all"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Icon name="list" style={{color: isSelected?"white":"gray"}} /> }>
          <TodosList {...this.props} type="all" />
        </TabItem>
        <TabItem
          id="active"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Icon name="time" style={{color: isSelected?"white":"lightblue"}} /> }>
          <TodosList {...this.props} type="active" />
        </TabItem>
        <TabItem
          id="completed"
          selectedStyle={styles.selectedTab}
          renderIcon={(isSelected) => <Icon name="checkmark-circle" style={{color: isSelected?"white":"lightgreen"}} /> }>
          <TodosList {...this.props} type="completed" />
        </TabItem>
      </TabNavigation>
    )
  }

}

class TodosList extends React.Component {

  render() {
    let {todos, type} = this.props;
    return (
      <Container>
        <Content>
          {todos.list.map((v,k)=>(
            <TodoItem key={k} text={v.text} completed={v.completed}/>
          ))}
        </Content>
      </Container>
    )
  }

}

const styles = {
  selectedTab: {
    backgroundColor: '#AAA'
  }
};

export default connect(({todos})=>({todos}))(TodosPage);