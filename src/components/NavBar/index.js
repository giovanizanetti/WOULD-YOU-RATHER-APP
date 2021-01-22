import { useState } from 'react'
import { useSelector } from 'react-redux'
import DesktopLinks from './DesktopLinks'
import MobileDrawer from './MobileDrawer'
import { useScreenSize } from '../../hooks/useScreenSize'

const NavBar = () => {
  const [showDrawer, setShowDrawer] = useState(false)
  const [isSmallScreen] = useScreenSize()

  const authedUser = useSelector((state) => {
    const { name, avatarURL } = state.users[state.auth.authedUser] || {}
    return { name, avatarURL }
  })

  const isAuthenticated = authedUser.name !== undefined

  return (
    <>
      {isSmallScreen && isAuthenticated && (
        <MobileDrawer show={showDrawer} setShow={setShowDrawer} authedUser={authedUser} />
      )}
      <nav className='navBar' style={isSmallScreen ? { justifyContent: 'flex-end' } : null}>
        {isSmallScreen && isAuthenticated && (
          <img
            onClick={() => setShowDrawer(!showDrawer)}
            src='./assets/humbuguer icon.svg'
            alt='oprn menu button'
            style={{ margin: '1.5rem', display: 'flex', alignSelf: 'flex-start', width: 30, cursor: 'pointer' }}
          />
        )}

        {!isSmallScreen && isAuthenticated && <DesktopLinks authedUser={authedUser} />}
      </nav>
    </>
  )
}
export default NavBar
