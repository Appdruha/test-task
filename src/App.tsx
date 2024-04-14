import { Route, Routes, useLocation } from 'react-router-dom'
import { Main } from './pages/main/Main.tsx'
import { Upload } from './pages/upload/Upload.tsx'
import { animated, useTransition } from 'react-spring'
import { useEffect, useRef, useState } from 'react'
import styles from './app.module.css'
import { TransitionConfig } from './types/Transition-config.ts'

export const App = () => {
  const location = useLocation()

  const containerRef = useRef<null | HTMLElement>(null)
  const containerSizeRef = useRef<{ width: number, height: number }>({ width: 0, height: 0 })
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [transitionConfig, setTransitionConfig] = useState<TransitionConfig>({
    from: { transform: 'translateX(100%)', position: 'absolute' },
    enter: { transform: 'translateX(0%)', position: 'relative' },
    leave: { transform: 'translateX(-100%)' },
  })

  useEffect(() => {
    if (containerRef.current) {
      const width = Math.floor(containerRef.current.getBoundingClientRect().width)
      const height = Math.floor(containerRef.current.getBoundingClientRect().height)
      containerSizeRef.current = { width, height }
    }
  }, [])

  useEffect(() => {
    console.log(transitionConfig)
  }, [transitionConfig])

  const transitions = useTransition(location, transitionConfig)

  return (
    <main className={styles.container} ref={containerRef}>
      {transitions((style, item) => (
        <animated.div style={{
          ...style,
          width: `${containerSizeRef.current.width}px`,
          height: `${containerSizeRef.current.height}px`,
        }}>
          <Routes location={item}>
            <Route index path='/' element={<Main setTransitionConfig={setTransitionConfig} isLoggedIn={isLoggedIn}
                                                 setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/upload' element={<Upload setTransitionConfig={setTransitionConfig} />} />
          </Routes>
        </animated.div>
      ))}
    </main>
  )
}
