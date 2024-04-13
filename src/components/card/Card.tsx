import styles from './card.module.css'
import { useNavigate } from 'react-router-dom'

export const Card = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/upload')
  }

  return (
    <div className={styles.container} onClick={() => handleClick()}>
      <div className={styles.imgBox}><img src='#' alt='#' /></div>
      <p>Lego</p>
    </div>
  )
}
