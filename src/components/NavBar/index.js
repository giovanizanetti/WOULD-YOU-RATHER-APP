import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navBar'>
      <ul>
        <li>
          <NavLink className='navItem' to='signin'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='navItem' to='signin'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='navItem' to='signin'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='navItem' to='signin'>
            Home
          </NavLink>
        </li>
      </ul>
      {/* <NavLink>Home</NavLink>
      <NavLink>Home</NavLink> */}
    </nav>
  )
}
export default NavBar
