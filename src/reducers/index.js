import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import users from './users'

export default combineReducers({
  users,
  loadingBar: loadingBarReducer,
})
