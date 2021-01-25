import { GET_QUESTIONS, SAVE_QUESTION } from '../actions/types'

const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case SAVE_QUESTION:
      console.log(action.question)
      return {
        ...state,
        [action.question.id]: action.question,
      }
    default:
      return state
  }
}

export default questions
