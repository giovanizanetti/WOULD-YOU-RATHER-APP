import { GET_USERS } from './types'
import { showLoading, hideLoading } from 'react-redux-loading'
import { _getUsers } from '../../_DATA'

export const getUsers = () => (dispatch) => {
  dispatch(showLoading)
  return _getUsers()
    .then((users) => {
      dispatch({ type: GET_USERS, users })
      dispatch(hideLoading())
    })
    .catch((err) => {
      console.log(err)
      dispatch(hideLoading())
    })
}
