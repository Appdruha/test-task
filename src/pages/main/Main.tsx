import { Footer } from '../../components/footer/Footer.tsx'
import { Header } from '../../components/header/Header.tsx'
import { Card } from '../../components/card/Card.tsx'
import { LogIn } from '../../components/log-in/Log-in.tsx'
import { useEffect, useState } from 'react'
import styles from './main.module.css'
import { RemoveScroll } from 'react-remove-scroll'
import { animated, useSpring } from 'react-spring'
import { TransitionConfig } from '../../types/Transition-config.ts'

export const Main = (props: {
  isLoggedIn: boolean,
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
  setTransitionConfig: React.Dispatch<React.SetStateAction<TransitionConfig>>
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const animation = useSpring({
    opacity: isModalOpen ? 1 : 0,
    backdropFilter: isModalOpen ? 'blur(50px)' : 'blur(0px)',
    config: { duration: 400 },
  })

  useEffect(() => {
    if (props.isLoggedIn) {
      props.setTransitionConfig({
        from: { opacity: 0, position: 'absolute' },
        enter: { opacity: 1, position: 'relative' },
        leave: { opacity: 0 },
      })
    } else {
      props.setTransitionConfig({
        from: { transform: 'translateX(100%)', position: 'absolute' },
        enter: { transform: 'translateX(0%)', position: 'relative' },
        leave: { transform: 'translateX(-100%)' },
      })
    }
  }, [props.isLoggedIn])

  return (
    <RemoveScroll enabled={isModalOpen}>
      <div className={styles.container}>
        <Header isLoggedIn={props.isLoggedIn} setIsModalOpen={setIsModalOpen} />
        <div className={styles.cardsBox}>
          <Card />
          <Card />
        </div>
        <Footer />
        {isModalOpen && <animated.div
          style={{ ...animation, position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
          <LogIn setIsLoggedIn={props.setIsLoggedIn} setIsModalOpen={setIsModalOpen} />
        </animated.div>}
      </div>
    </RemoveScroll>
  )
}