import { NavLink } from 'react-router-dom'
import UserAvatar from './UserAvatar'
import LogOutLink from './LogOutLink'

const DesktopLinks = ({ authedUser }) => {
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
      <UserAvatar authedUser={authedUser} className='desktopUser' />
      {/* <li>
        <NavLink to='signin' className='navItem'>
          Logout
        </NavLink>
      </li> */}
      <LogOutLink />
    </ul>
  )
}

export default DesktopLinks
