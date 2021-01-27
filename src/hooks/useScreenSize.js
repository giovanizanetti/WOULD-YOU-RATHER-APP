import { useState, useEffect } from 'react'

export const useScreenSize = (size) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < size ? true : false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < size) {
        setIsSmallScreen(true)
      } else {
        setIsSmallScreen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [isSmallScreen, size])

  return [isSmallScreen]
}
