import React from 'react';
import {View, Text, Thumbnail, Container, Content, Button, Icon} from 'native-base';
import MenuHeader from '../components/MenuHeader';

class HomePage extends React.Component {

  render() {
    return (
      <Container>
        <MenuHeader title="Home" navigation={this.props.navigation}/>
        <Content contentContainerStyle={styles.container}>
          <View style={styles.container}>
            <Thumbnail square size={100} source={require('../assets/app-icon.png')}/>
            <Text style={{marginTop: 20}}>Click on the upper left corner to navigate.</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default HomePage;