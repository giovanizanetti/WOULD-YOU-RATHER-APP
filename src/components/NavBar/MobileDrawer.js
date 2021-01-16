import { NavLink } from 'react-router-dom'
const MobileDrawer = ({ show, setShow }) => {
  return (
    <div className='mobileNav' style={{ background: 'rgb(51 51 51 / .6)' }}>
      {show && (
        <nav className='mobileDrawer'>
          <img
            onClick={() => setShow(!show)}
            src='./assets/close-24px.svg'
            alt='oprn menu button'
            style={{ margin: '1rem', display: 'flex', alignSelf: 'flex-end', width: 30, cursor: 'pointer' }}
          />
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
        </nav>
      )}
    </div>
  )
}

export default MobileDrawer
