import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DesktopLinks from './DesktopLinks'
import MobileDrawer from './MobileDrawer'

const NavBar = () => {
  const {
    location: { pathname },
  } = useHistory() || {}

  const [showDrawer, setShowDrawer] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 920 ? true : false)
  const authedUser = useSelector((state) => {
    const { name, avatarURL } = state.users[state.auth.authedUser] || {}
    return { name, avatarURL }
  })

  const isUserAuthed = authedUser.name !== undefined

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 920) {
        setIsSmallScreen(true)
      } else setIsSmallScreen(false)
    }
    window.addEventListener('resize', handleResize)
  }, [isSmallScreen])

  return (
    <>
      {isSmallScreen && isUserAuthed && (
        <MobileDrawer show={showDrawer} setShow={setShowDrawer} authedUser={authedUser} />
      )}
      <nav className='navBar' style={isSmallScreen ? { justifyContent: 'flex-end' } : null}>
        {isSmallScreen && isUserAuthed && (
          <img
            onClick={() => setShowDrawer(!showDrawer)}
            src='./assets/humbuguer icon.svg'
            alt='oprn menu button'
            style={{ margin: '1.5rem', display: 'flex', alignSelf: 'flex-start', width: 30, cursor: 'pointer' }}
          />
        )}

        {!isSmallScreen && isUserAuthed && <DesktopLinks authedUser={authedUser} />}
      </nav>
    </>
  )
}
export default NavBar
