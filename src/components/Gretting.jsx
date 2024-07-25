import React from 'react'
import GreetingImage from '../assets/greeting.svg'
import styles from '../styles/Greeting.module.css'

const Gretting = () => {
  return (
    <div id='greeting' className={styles.main}>
      <div className={styles.innerSection}>
        <div className={styles.greetingTxt}>Greeting</div>
        <div className={styles.greetingImgContainer}>
          <img className={styles.greetingImg} src={GreetingImage} loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default Gretting