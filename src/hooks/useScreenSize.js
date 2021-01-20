import { useState } from 'react'

export const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 920 ? true : false)
  return [isSmallScreen, setIsSmallScreen]
}
