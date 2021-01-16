import { NavLink } from 'react-router-dom'
const MobileDrawer = () => {
  return (
    <nav className='mobileNav'>
      <img
        src='./assets/humbuguer icon.svg'
        alt='oprn menu button'
        style={{ margin: '1.5rem', display: 'flex', alignSelf: 'flex-start', width: 30 }}
      />
      <div className='mobileDrawer'>
        <div className='mobileUser'>
          <img src='./assets/avata-m-1.svg' style={{ width: '6rem', margin: '1rem' }} alt='user'></img>

          <span>Hello User</span>
        </div>
        <ul>
          <li>
            <NavLink to='/'>
              <div>
                <img src=''></img>
                <span>Home</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/newQuestion'>New Question</NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard'>Leader Board</NavLink>
          </li>

          <li>
            <NavLink to='signin'>Logout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MobileDrawer
