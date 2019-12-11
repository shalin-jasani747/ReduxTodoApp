import React from 'react';
import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';

export default ({headerTitle, onPress}) => {
  return (
    <Header>
      <Left>
        <Button transparent onPress={onPress}>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Title>{headerTitle}</Title>
      </Body>
      <Right />
    </Header>
  );
};
