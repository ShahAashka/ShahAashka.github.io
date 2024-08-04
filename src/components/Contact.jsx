import React from 'react'
import ContactImage from '/assets/contact.svg'
// import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <div id='contact' className="flex last-section-height items-center bg-primary-400 bg-noise">
     <div className="container grid place-items-center gap-12 max-lg:py-12 lg:grid-cols-2 lg:gap-20">
        <div className="grid gap 4">Contact</div>
        <div className="gird">
          <img className="w-full h-full object-contain" src={ContactImage} loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default Contact