import { SIGN_IN_USER, LOG_OUT_USER } from './types'

export const signinUser = (id) => {
  return {
    type: SIGN_IN_USER,
    id,
  }
}

export const logoutUser = () => {
  console.log('logoutUser action called')
  return {
    type: LOG_OUT_USER,
  }
}
