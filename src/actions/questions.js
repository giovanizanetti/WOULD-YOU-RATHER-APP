import { GET_QUESTIONS } from './types'
import { showLoading, hideLoading } from 'react-redux-loading'
import { _getQuestions } from '../_DATA'

export const getQuestions = () => (dispatch) => {
  console.log('get questions action creator called')
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
