import { NavLink } from 'react-router-dom'
import UserAvatar from './UserAvatar'
import LogOutLink from './LogOutLink'
import Home from '../../assets/home.svg'

const MobileDrawer = ({ show, setShow, authedUser }) => {
  return (
    <div onClick={() => setShow(!show)} className='mobileNav' style={{ background: 'rgb(51 51 51 / .6)', zIndex: 1 }}>
      {show && (
        <nav onClick={(e) => e.stopPropagation()} className='mobileDrawer'>
          <img
            onClick={() => setShow(!show)}
            src={'./assets/close-24px.svg'}
            alt='oprn menu button'
            style={{ margin: '1rem', display: 'flex', alignSelf: 'flex-end', width: 30, cursor: 'pointer' }}
          />

          <UserAvatar className='mobileUser' authedUser={authedUser} />

          <ul>
            <li>
              <NavLink onClick={() => setShow(!show)} to='/'>
                <div className='mobileLinkContainer'>
                  {setShow !== undefined && <img src={Home} alt='home'></img>}
                  <span>Home</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink onClick={() => setShow(!show)} to='/newQuestion'>
                <div className='mobileLinkContainer'>
                  <div className='mobileNavIcon'></div>
                  <img src='./assets/NewQuestion.svg' alt='new question' />
                  <span>New Question</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink onClick={() => setShow(!show)} to='/leaderboard'>
                <div className='mobileLinkContainer'>
                  <div className='mobileNavIcon'></div>
                  <img src='./assets/LeaderBoard.svg' alt='leader bord' />
                  <span>Leader Board</span>
                </div>
              </NavLink>
            </li>

            <LogOutLink setShow={setShow} />
          </ul>
        </nav>
      )}
    </div>
  )
}

export default MobileDrawer
