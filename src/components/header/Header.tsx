import styles from './header.module.css'

export const Header = (props: {isLoggedIn: boolean}) => {
  return (
    <header className={styles.container}>
      <p>OneAI</p>
      {!props.isLoggedIn && <button>Sign in</button>}
    </header>
  )
}