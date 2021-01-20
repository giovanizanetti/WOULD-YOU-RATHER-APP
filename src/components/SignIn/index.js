import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from '../../actions/users'
import { signinUser } from '../../actions/auth'

import Select from 'react-select'
import { _isEmpty } from '../../utils'

const SignIn = () => {
  const users = useSelector((state) => state.users)

  const [selectedValue, setSelectedValue] = useState('Select or search a user')

  const dispatch = useDispatch()

  useEffect(() => {
    if (_isEmpty(users)) {
      dispatch(getUsers())
    }
  }, [dispatch, users])

  const options = Object.keys(users).map((id) => {
    return {
      value: users[id].id,
      label: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '1.5rem',
          }}
        >
          <img style={{ width: 36, margin: '0 1rem' }} src={users[id].avatarURL} alt={`${users[id].name} avatar`} />
          <span>{users[id].name}</span>
        </div>
      ),
      color: 'pink',
    }
  })

  const placeholder = 'Select or search a user'

  const handleChange = ({ value }) => {
    setSelectedValue(value)
    // dispatch(signinUser(value))
  }

  const handleSubmit = () => {
    dispatch(signinUser(selectedValue))
  }

  return (
    <>
      <div className='container' style={{ maxWidth: 400 }}>
        <div className='container-header'>
          <h3 style={{ margin: 0, marginBottom: '.2rem' }}>Welcome to the Would You Rather Game</h3>
          <span style={{ marginTop: '.2rem' }}>Please sign in to continue</span>
        </div>

        <h2 className='superBold' style={{ color: '#4285f4', fontSize: 36 }}>
          Sign In
        </h2>
        <div>
          <img src='./assets/signin-img.svg' style={{ width: '80%', margin: '1rem' }} alt='laptop'></img>
        </div>
        <form style={{ padding: '1rem' }}>
          <Select autoFocus placeholder={placeholder} options={options} onChange={handleChange} />
          <Link to='/'>
            <button
              onClick={handleSubmit}
              disabled={selectedValue === placeholder ? true : false}
              className='btn'
              type='submit'
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </>
  )
}

export default SignIn
