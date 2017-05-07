import React, { Component } from 'react';
import { Container, Content, Tab, Tabs, Text, Icon } from 'native-base';

class Tab1 extends Component {

  render(){
    return(
      <Icon name='home' />
    )
  }

}

let Tab3 = Tab1;
let Tab2 = Tab1;

class TabsExample extends Component {

  static route = {
    navigationBar: {
      backgroundColor: '#333',
      tintColor: 'white',
      title: 'Tabs'
    }
  };

  render() {
    return (
      <Container>
        <Tabs style={{backgroundColor:'#333'}}>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default TabsExample;