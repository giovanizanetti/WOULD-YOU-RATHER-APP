import DesktopLinks from './DesktopLinks'
import MobileDrawer from './MobileDrawer'
const NavBar = () => {
  return (
    <>
      <MobileDrawer />
      <nav style={{ display: 'none' }} className='navBar'>
        {/* - hide Desktop < 920px
       - Style MobileDrawer 
    */}
        <DesktopLinks />

        {/* <NavLink>Home</NavLink>
  <NavLink>Home</NavLink> */}
      </nav>
    </>
  )
}
export default NavBar
