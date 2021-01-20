import { SIGN_IN_USER, LOGOUT_USER } from './types'

export const signinUser = (id) => {
  console.log('login action is working')
  return {
    type: SIGN_IN_USER,
    id,
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  }
}
