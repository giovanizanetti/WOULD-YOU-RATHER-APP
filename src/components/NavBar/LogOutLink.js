import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../actions/auth'
import { useScreenSize } from '../../hooks/useScreenSize'
import LogoutIcon from '../../assets/Logout.svg'

const LogOutLink = ({ setShow }) => {
  const dispatch = useDispatch()
  const [isSmallScreen] = useScreenSize(920)
  const handleClick = () => {
    dispatch(logoutUser())
    setShow && setShow(false)
  }
  return (
    <li>
      {isSmallScreen ? (
        <NavLink onClick={handleClick} to='signin'>
          <div className='mobileLinkContainer'>
            <div className='mobileNavIcon'></div>
            <img src={LogoutIcon} alt='logout' />
            <span>Logout</span>
          </div>
        </NavLink>
      ) : (
        <NavLink onClick={handleClick} to='/signin' className='navItem'>
          Logout
        </NavLink>
      )}
    </li>
  )
}
export default LogOutLink
