import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../actions/users'
import Select from 'react-select'
import { _isEmpty } from '../../utils'

const SignIn = () => {
  const users = useSelector((state) => state.users)
  const [selectedValue, setSelectedValue] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (_isEmpty(users)) {
      dispatch(getUsers())
    }
  }, [dispatch, users])

  const options = Object.keys(users).map((id) => {
    return {
      value: users[id].name,
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submited: ', selectedValue)
    setSelectedValue(null)
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
        <form style={{ padding: '1rem' }} onSubmit={handleSubmit}>
          <Select
            placeholder='Select or search a user'
            options={options}
            // value={value}
            onChange={(e) => setSelectedValue(e.value)}
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default SignIn
