import styles from './choose-photo.module.css'
import { useNavigate } from 'react-router-dom'
import cat from '../../assets/images/cat.png'

export const ChoosePhoto = () => {
  const navigate = useNavigate()

  const handleMorePicsClick = () => {
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img src={cat} alt='#' />
      </div>
      <button onClick={() => console.log('save')} className={styles.saveButton}>Save</button>
      <button onClick={() => handleMorePicsClick()} className={styles.morePicsButton}>More pics</button>
    </div>
  )
}