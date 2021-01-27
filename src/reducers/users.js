import { GET_USERS, SAVE_USER_VOTE } from '../actions/types'

const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      }
    case SAVE_USER_VOTE:
      const { answer, authedUser, qid } = action.vote

      // copy users answers and append new answer
      const answers = { ...state[authedUser].answers, [qid]: answer }
      return {
        ...state,
        [authedUser]: { ...state[authedUser], answers },
      }
    default:
      return state
  }
}

export default users
