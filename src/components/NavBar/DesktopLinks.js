import { NavLink } from 'react-router-dom'

const DesktopLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to='/' className='navItem'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/newQuestion' className='navItem'>
          New Question
        </NavLink>
      </li>
      <li>
        <NavLink to='/leaderboard' className='navItem'>
          Leader Board
        </NavLink>
      </li>
      <li style={{ color: '#f2f2f2', margin: '0 4rem' }}>Hello User</li>
      <li>
        <NavLink to='signin' className='navItem'>
          Logout
        </NavLink>
      </li>
    </ul>
  )
}

export default DesktopLinks
