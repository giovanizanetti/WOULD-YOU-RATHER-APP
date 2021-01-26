import { Link, useHistory } from 'react-router-dom'

const NotFound = () => {
  const history = useHistory()
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <button onClick={() => history.replace('/')} className='btn' to='/'>
        Go Home
      </button>
    </div>
  )
}

export default NotFound
