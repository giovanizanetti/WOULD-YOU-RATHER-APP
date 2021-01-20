import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../actions/auth'
import { useScreenSize } from '../../hooks/useScreenSize'

const LogOutLink = ({ setShow }) => {
  const dispatch = useDispatch()
  const [isSmallScreen] = useScreenSize()
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
            <img src='./assets/Logout.svg' alt='logout' />
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
