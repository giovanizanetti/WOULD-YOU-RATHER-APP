import { GET_USERS } from '../actions/types'

const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      }
    default:
      return state
  }
}

export default users
