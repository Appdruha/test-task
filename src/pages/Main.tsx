import { Footer } from '../components/footer/Footer.tsx'
import styles from './main.module.css'
import { Header } from '../components/header/Header.tsx'
import { Card } from '../components/card/Card.tsx'

export const Main = (props: {isLoggedIn: boolean}) => {

  return (
    <div className={styles.container}>
      <Header isLoggedIn={props.isLoggedIn}/>
      <div className={styles.cardsBox}>
        <Card/>
        <Card/>
      </div>
      <Footer/>
    </div>
  )
}