import { GET_QUESTIONS } from '../actions/types'

const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    default:
      return state
  }
}

export default questions
