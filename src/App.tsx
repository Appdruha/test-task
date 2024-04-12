import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { Main } from './pages/Main.tsx'
import { Upload } from './pages/Upload.tsx'
import styles from './app.module.css'
import { animated, useTransition } from 'react-spring'
import { useEffect, useRef } from 'react'

export const App = () => {
  const location = useLocation()

  const containerWidthRef = useRef(0)

  useEffect(() => {
    const container = document.querySelector('main')
    if (container) {
      containerWidthRef.current = Math.floor(container.getBoundingClientRect().width)
    }
  }, [])

  const transitions = useTransition(location, {
    from: {transform: 'translateX(100%)' },
    enter: {transform: 'translateX(0%)' },
    leave: {position: 'absolute', transform: `translateX(-${containerWidthRef.current}px)` },
  })

  return (
    <main className={styles.container}>
      <NavLink to='/'>main</NavLink>
      <NavLink to='/upload'>upload</NavLink>
      {transitions((style, item  ) => (
        <animated.div style={style}>
          <Routes location={item}>
            <Route index path='/' element={<Main />} />
            <Route path='/upload' element={<Upload />} />
          </Routes>
        </animated.div>
      ))}
    </main>
  )
}
