import React from 'react';
import {Container, Content, Form, Item, Input, Icon} from 'native-base';
import CustomHeader from './CustomHeader';
import {connect} from 'react-redux';

import AddToDO from './AddToDO';
import ToDoActions from '../ReduxSauce/ToDoRedux';

const ReduxSauce = ({navigation, addTodo}) => {
  return (
    <Container>
      <CustomHeader headerTitle={'ReduxSauce Todos'} onPress={() => navigation.goBack()} />
      <Content>
        <AddToDO onAddToDo={(item) => addTodo(item)} />
      </Content>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state.todo.toDos)
  return {
    todos: state.todo.toDos,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: item => dispatch(ToDoActions.addTodo(item)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxSauce);
