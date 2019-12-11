import React, {useState} from 'react';
import {Container, Content, Form, Item, Input, Icon} from 'native-base';
import { now } from 'lodash';

const createToDo = (name) => {
  return {
    id: now(),
    text: name,
    completed: false,
  };
}

export default ({onAddToDo}) => {
  const [itemName, setItemName] = useState('');
  console.log(itemName)
  return (
    <Form>
      <Item>
        <Input placeholder="Start adding..." onChangeText={text => setItemName(text)} />
        <Icon name="add" onPress={() => onAddToDo(createToDo(itemName))}/>
      </Item>
    </Form>
  );
};
