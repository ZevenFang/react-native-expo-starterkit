import React from 'react';
import {Platform} from 'react-native';
import {Container, Content, Text, Icon, Header, Input, Item, View} from 'native-base';
import {TabNavigator} from 'react-navigation';
import {connect} from 'dva/mobile';
import TodoItem from '../components/TodoItem';
import Touch from '../components/Touch';
import MenuHeader from '../components/MenuHeader';

const TodosNav = TabNavigator({
  All: {
    screen: ()=><TodosList type="all" />
  },
  Active: {
    screen: ()=><TodosList type="active" />
  },
  Completed: {
    screen: ()=><TodosList type="completed" />
  }
}, {
  tabBarOptions: Platform.OS==='ios'?{
    labelStyle: {fontSize: 15, top: -15}
  }:{},
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
});

class TodosPage extends React.Component {

  state = {
    text: ''
  };

  addTask = () => {
    let {dispatch} = this.props;
    let {text} = this.state;
    if (text.trim().length===0) return;
    dispatch({
      type: 'todos/add',
      text
    });
    this.setState({text: ''});
  };

  render() {
    return (
      <Container>
        <MenuHeader title="Todos" navigation={this.props.navigation} right={<ClearButton/>}/>
        <Header searchBar rounded>
          <Item>
            <Icon name="menu" />
            <Input placeholder="New task"
                   onSubmitEditing={this.addTask}
                   onChangeText={(text) => this.setState({text})}
                   value={this.state.text}/>
            <Icon name="checkmark-circle" ios="md-checkmark-circle-outline" onPress={this.addTask} />
          </Item>
        </Header>
        <TodosNav/>
      </Container>
    )
  }

}

@connect(({todos})=>({todos}))
class TodosList extends React.Component {

  delTask = (index) => {
    let {dispatch} = this.props;
    dispatch({
      type: 'todos/del',
      index
    });
  };

  check = (index) => {
    let {dispatch} = this.props;
    dispatch({
      type: 'todos/check',
      index
    })
  };

  render() {
    let {todos, type} = this.props;
    let list = todos.list.map((v,k) => ({...v, index: k}));
    if (type=='active') list = list.filter(v => !v.completed);
    else if (type=='completed') list = list.filter(v => v.completed);
    return (
      <Content>
        {list.length>0?list.map((v,k)=>(
            <TodoItem key={k} index={v.index} text={v.text} completed={v.completed} onPress={this.check} onDelete={this.delTask}/>
          )):<View style={{alignItems: 'center', marginTop: 20}}><Text style={{color: '#808080'}}>There is no task here.</Text></View>}
      </Content>
    )
  }

}

@connect()
class ClearButton extends React.Component {
  render() {
    return (
      <Touch onPress={()=>{this.props.dispatch({type: 'todos/clearCompleted'})}}>
        <Text>Clear</Text>
      </Touch>
    )
  }
}

export default connect(({todos})=>({todos}))(TodosPage);