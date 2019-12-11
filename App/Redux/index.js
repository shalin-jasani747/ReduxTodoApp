import { combineReducers } from 'redux'
import todos from './Reducers/todos';
import visibilityFilter from './Reducers/visibilityFilter';

export default combineReducers({
  todos,
  visibilityFilter
})
