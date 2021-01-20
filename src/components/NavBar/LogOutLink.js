import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../actions/auth'

const LogOutLink = ({ setShow }) => {
  const dispatch = useDispatch()
  return (
    <li>
      <NavLink
        onClick={() => {
          dispatch(logoutUser())
          setShow && setShow(false)
        }}
        to='signin'
      >
        <div className='mobileLinkContainer'>
          <div className='mobileNavIcon'></div>
          <img src='./assets/Logout.svg' alt='logout' />
          <span>Log out</span>
        </div>
      </NavLink>
    </li>
  )
}
export default LogOutLink
