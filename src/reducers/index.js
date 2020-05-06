import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import gameSetting from './gameReducer'

export default combineReducers({
  todos,
  gameSetting
})
