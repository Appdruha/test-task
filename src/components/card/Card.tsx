import styles from './card.module.css'
import { useNavigate } from 'react-router-dom'
import cat from '../../assets/images/cat.png'

export const Card = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/upload')
  }

  return (
    <div className={styles.container} onClick={() => handleClick()}>
      <img src={cat} alt='#' className={styles.imgBox}/>
      <p className={styles.text}>Lego</p>
    </div>
  )
}
