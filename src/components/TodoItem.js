import React, {Component} from 'react';
import {ListItem, CheckBox, Text} from 'native-base';

class TodoItem extends Component {

  render() {
    let {completed, text} = this.props;
    return (
      <ListItem>
        <CheckBox style={{backgroundColor: completed?'gray':'white', borderColor: 'gray'}} checked={completed} />
        <Text style={{marginLeft: 15, textDecorationLine: completed?'line-through':'none'}}>{text}</Text>
      </ListItem>
    );
  }

}

export default TodoItem;