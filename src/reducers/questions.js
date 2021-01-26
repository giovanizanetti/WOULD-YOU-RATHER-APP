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
      const { qid, authedUser, answer } = action.vote || {}
      // create copy to deep change its props adding autherUser id as a vote
      const updatedQuestion = { ...state[qid] }
      updatedQuestion[answer].votes.push(authedUser)
      return {
        ...state,
        [qid]: updatedQuestion,
      }
    default:
      return state
  }
}

export default questions
