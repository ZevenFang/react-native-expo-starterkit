import React from 'react';
import {Button, Icon} from 'native-base';
import CustomHeader from './CustomHeader';

class MenuHeader extends React.Component {

  render() {
    let {title, right, navigation} = this.props;
    return (
      <CustomHeader
        title={title}
        left={
          <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
            <Icon name='menu' />
          </Button>
        }
        right={right}
      />
    )
  }

}

export default MenuHeader;