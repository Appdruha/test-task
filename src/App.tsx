import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { Main } from './pages/Main.tsx'
import { Upload } from './pages/Upload.tsx'
import styles from './app.module.css'
import { animated, useTransition } from 'react-spring'
import { useEffect, useRef, useState } from 'react'

export const App = () => {
  const location = useLocation()

  const containerRef = useRef<null | HTMLElement>(null)
  const containerSizeRef = useRef<{ width: number, height: number }>({ width: 0, height: 0 })

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      const width = Math.floor(containerRef.current.getBoundingClientRect().width)
      const height = Math.floor(containerRef.current.getBoundingClientRect().height)
      containerSizeRef.current = { width, height }
    }
  }, [])

  const transitions = useTransition(location, {
    from: { transform: 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: {
      position: 'absolute',
      transform: `translateX(-${containerSizeRef.current.width}px)`,
    },
  })

  return (
    <main className={styles.container} ref={containerRef}>
      {transitions((style, item) => (
        <animated.div style={{
          ...style,
          width: `${containerSizeRef.current.width}px`,
          height: `${containerSizeRef.current.height}px`,
          zIndex: '5'
        }}>
          <Routes location={item}>
            <Route index path='/' element={<Main isLoggedIn={isLoggedIn}/>} />
            <Route path='/upload' element={<Upload />} />
          </Routes>
        </animated.div>
      ))}
    </main>
  )
}
