import { GET_QUESTIONS, SAVE_QUESTION, SAVE_USER_VOTE } from './types'
import { showLoading, hideLoading } from 'react-redux-loading'
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../_DATA'

export const getQuestions = () => (dispatch) => {
  dispatch(showLoading())
  return _getQuestions()
    .then((questions) => {
      dispatch({ type: GET_QUESTIONS, questions })
      dispatch(hideLoading())
    })
    .catch((err) => {
      console.log(err)
      dispatch(hideLoading())
    })
}

export const saveQuestion = (question) => (dispatch) => {
  dispatch(showLoading())
  return _saveQuestion(question)
    .then((question) => {
      dispatch({ type: SAVE_QUESTION, question })
      dispatch(hideLoading())
    })
    .catch((err) => {
      console.log(err)
      dispatch(hideLoading())
    })
}

export const saveUserVote = (vote) => (dispatch) => {
  dispatch(showLoading())
  return _saveQuestionAnswer(vote)
    .then((vote) => {
      dispatch({ type: SAVE_USER_VOTE, vote })
      dispatch(hideLoading())
    })
    .catch((err) => {
      console.log(err)
      dispatch(hideLoading())
    })
}
