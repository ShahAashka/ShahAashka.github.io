import React from 'react'
import GreetingImage from '/assets/greeting.svg'
// import styles from '../styles/Greeting.module.css'

const Gretting = () => {
  return (
    <section id='greeting' className="flex section-height items-center bg-primary-400 bg-noise">
      <div className="container grid place-items-center gap-12 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20">
        <div className="grid cursor-default gap-4">Greeting</div>
        <div className="grid">
          <img className="w-full h-full object-contain" src={GreetingImage} loading="lazy" />
        </div>
      </div>
    </section>
  )
}

export default Gretting