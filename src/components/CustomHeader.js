import React from 'react';
import {Header, Left, Body, Title, Right} from 'native-base';

class CustomHeader extends React.Component {

  render() {
    let {left, right, title, backgroundColor, color} = this.props;
    return (
      <Header style={{backgroundColor}}>
        <Left>
          {left}
        </Left>
        <Body>
        <Title style={{color}}>{title}</Title>
        </Body>
        <Right>
          {right}
        </Right>
      </Header>
    )
  }

}

export default CustomHeader;