import React from 'react'
import AboutImage from '/assets/about-me.svg'
// import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div id='about' className="flex section-height items-center bg-primary-200">
      <div className="container grid place-items-center gap-12 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20">
        <div className="grid gap-4">
          <img className="w-full h-full object-contain" src={AboutImage} alt="about" />
        </div>
        <div className="grid justify-center">About</div>
      </div>
    </div>
  )
}

export default About