import { useState, useEffect } from 'react'

export const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 920 ? true : false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 920) {
        setIsSmallScreen(true)
      } else {
        setIsSmallScreen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [isSmallScreen])

  return [isSmallScreen]
}
