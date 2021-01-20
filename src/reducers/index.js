import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import users from './users'
import auth from './auth'

export default combineReducers({
  users,
  loadingBar: loadingBarReducer,
  auth,
})
