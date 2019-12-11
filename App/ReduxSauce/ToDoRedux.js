import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {findIndex, reject} from 'lodash';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  addTodo: ['todo'],
  updateTodo: ['todo'],
  deleteTodo: ['id'],
  completeTodo: ['id'],
})

export const ToDoTypes = Types
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  toDos: []
})

/* ------------- Reducers ------------- */

// request the data from an api
export const addTodo = (state, {todo}) =>
  state.merge({toDos: [...state.toDos, todo]})

// successful api lookup
export const updateTodo = (state, {todo}) => {
  const index = findIndex(state.toDos, item => item.id === todo.id)
  return state.merge({toDos: {...state.toDos, [index] : todo} })
}

// Something went wrong somewhere.
export const deleteTodo = (state, {todo}) =>
  state.merge({toDos: reject(state.toDos, item => item.id === todo.id)});

export const completeTodo = (state, {todo}) => {
  const index = findIndex(state.toDos, item => item.id === todo.id)
  return state.merge({toDos: {...state.toDos, [index]: {...state.toDos[index], completed: !state.toDos[index].completed }} })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: addTodo,
  [Types.UPDATE_TODO]: updateTodo,
  [Types.DELETE_TODO]: deleteTodo,
  [Types.COMPLETE_TODO]: completeTodo,
})
