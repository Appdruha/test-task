import styles from './header.module.css'
import React from 'react'

export const Header = (props: {
  isLoggedIn: boolean,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const handleClick = () => {
    props.setIsModalOpen(true)
  }

  return (
    <header className={styles.container}>
      <p className={styles.heading}>OneAI</p>
      {!props.isLoggedIn && <button className={styles.signInButton} onClick={() => handleClick()}>Sign in</button>}
    </header>
  )
}