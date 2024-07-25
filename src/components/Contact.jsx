import React from 'react'
import styles from '../styles/Contact.module.css'
import ContactImage from '../assets/contact.svg'

const Contact = () => {
  return (
    <div id='contact' className={styles.mainContact}>
     <div className={styles.contactInnerSection}>
        <div className={styles.contactTxt}>Contact</div>
        <div className={styles.contactImgContainer}>
          <img className={styles.contactImg} src={ContactImage} loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default Contact