import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.topText}>Get help at support@avgen.me</p>
      <p className={styles.bottomText}>Copyright © 2024 Mook Ltd. All rights reserved.</p>
    </footer>
  )
}