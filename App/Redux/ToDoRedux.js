import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addTodo: ['todo'],
  updateTodo: ['todo'],
  deleteTodo: ['id'],
  completeTodo: ['id'],
})

export const ToDoTypes = Types
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  todos: []
})

/* ------------- Reducers ------------- */

// request the data from an api
export const addTodo = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const updateTodo = (state, action) => {
  const { isUserLoggedIn } = action
  return state.merge({ fetching: false, error: null, isUserLoggedIn })
}

// Something went wrong somewhere.
export const deleteTodo = state =>
  state.merge({ fetching: false, error: true, payload: null })

export const completeTodo = (state, action) => {
  const { user } = action
  return state.merge({ fetching: false, error: null, user, isUserLoggedIn: true })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: addTodo,
  [Types.UPDATE_TODO]: updateTodo,
  [Types.DELETE_TODO]: deleteTodo,
  [Types.COMPLETE_TODO]: completeTodo,
})
