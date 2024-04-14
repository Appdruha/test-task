import styles from './log-in.module.css'
import { useState } from 'react'
import closeIcon from '../../assets/icons/close-svgrepo-com.svg'

export const LogIn = (props: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [isClosing, setIsClosing] = useState(false)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.currentTarget.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.currentTarget.value)
  }

  const handleSubmit = () => {
    props.setIsLoggedIn(true)
    props.setIsModalOpen(false)
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      props.setIsModalOpen(false)
    }, 400)
  }

  return (
    <div className={`${styles.container} ${isClosing && styles.closing}`}>
      <button className={styles.closeButton} onClick={() => handleClose()}>
        <img src={closeIcon} alt='#' />
      </button>
      <form>
        <input type='email' value={emailValue} placeholder='Email' className={styles.input}
               onChange={(e) => handleEmailChange(e)} />
        <input type='password' value={passwordValue} placeholder='Password' className={styles.input}
               onChange={(e) => handlePasswordChange(e)} />
        <button className={styles.submitButton} onClick={() => handleSubmit()}>Sign in</button>
      </form>
    </div>
  )
}