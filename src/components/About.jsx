import React from 'react'
import AboutImage from '../assets/about-me.svg'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div id='about' className={styles.mainAbout}>
      <div className={styles.innerAbout}>
        <div className={styles.aboutImageContainer}>
          <img className={styles.aboutImage} src={AboutImage} alt="about" />
        </div>
        <div className={styles.aboutContent}>About</div>
      </div>
    </div>
  )
}

export default About