import { GET_QUESTIONS, SAVE_QUESTION, SAVE_USER_VOTE } from '../actions/types'

const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      }
    case SAVE_USER_VOTE:
      console.log(action.vote)
      return {
        ...state,
      }
    default:
      return state
  }
}

export default questions
