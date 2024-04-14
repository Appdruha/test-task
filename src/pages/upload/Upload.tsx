import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ChoosePhoto } from '../../components/choose-photo/Choose-photo.tsx'
import { TransitionConfig } from '../../types/Transition-config.ts'
import cat from '../../assets/images/cat.png'
import cat1 from '../../assets/images/cat1.png'
import photoIcon from '../../assets/icons/photo.svg'
import cameraIcon from '../../assets/icons/camera.svg'
import icon from '../../assets/icons/arrow-left-bold.svg'
import styles from './upload.module.css'
import { animated, useSpring } from 'react-spring'

export const Upload = (props: { setTransitionConfig: React.Dispatch<React.SetStateAction<TransitionConfig>> }) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isModalOpen) {
      props.setTransitionConfig({
        from: { opacity: 0, position: 'absolute' },
        enter: { opacity: 1, position: 'relative' },
        leave: { opacity: 0 },
      })
    } else {
      props.setTransitionConfig({
        from: { transform: 'translateX(-100%)', position: 'absolute' },
        enter: { transform: 'translateX(0%)', position: 'relative' },
        leave: { transform: 'translateX(100%)' },
      })
    }
  }, [isModalOpen])

  const animation = useSpring({
    opacity: isModalOpen ? 1 : 0,
    backdropFilter: isModalOpen ? 'blur(50px)' : 'blur(0px)',
    config: { duration: 400 },
  })

  const handleBackButtonClick = () => {
    navigate('/')
  }

  const handleOpenModalClick = () => {
    setIsModalOpen(true)
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => handleBackButtonClick()}>
        <img src={icon} alt='#' />
        <p>Go back</p>
      </button>
      <div className={styles.imageBox}>
        <div className={styles.photo}><img src={cat} alt='#' /></div>
        <div className={`${styles.photo} ${styles.photoEffect}`}><img src={cat1} alt='#' /></div>
      </div>
      <div className={styles.bottomButtonsBox}>
        <button className={styles.bottomButton} onClick={() => handleOpenModalClick()}>
          <img src={photoIcon} alt='#' />
          <p>Choose photo from gallery</p>
        </button>
        <button className={styles.bottomButton} onClick={() => handleOpenModalClick()}>
          <img src={cameraIcon} alt='#' />
          <p>Take photo with camera</p>
        </button>
      </div>
      {isModalOpen && <animated.div
        style={{ ...animation, position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
        <ChoosePhoto />
      </animated.div>}
    </div>
  )
}