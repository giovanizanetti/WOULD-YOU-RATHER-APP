import { SIGN_IN_USER, LOGOUT_USER } from '../actions/types'
const initialState = {
  authedUser: null,
}
const users = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        ...state,
        authedUser: action.id,
      }
    case LOGOUT_USER:
      return {
        ...state,
        authedUser: null,
      }
    default:
      return state
  }
}
export default users
