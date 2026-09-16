import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollPosition(threshold = 10) {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold, location.pathname])

  return scrolled
}
