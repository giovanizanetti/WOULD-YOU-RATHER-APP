import { GET_QUESTIONS, SAVE_QUESTION } from './types'
import { showLoading, hideLoading } from 'react-redux-loading'
import { _getQuestions, _saveQuestion } from '../_DATA'

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
  console.log(question)
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
