import { SIGN_IN_USER } from './types'

export const signinUser = (id) => {
  console.log('login action is working')
  return {
    type: SIGN_IN_USER,
    id,
  }
}
