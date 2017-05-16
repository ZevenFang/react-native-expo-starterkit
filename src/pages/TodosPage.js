import React from 'react';
import {Container, Content, View, Text} from 'native-base';

class TodosPage extends React.Component {

  static route = {
    navigationBar: {
      title: 'Todos'
    }
  };

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
};

export default TodosPage;