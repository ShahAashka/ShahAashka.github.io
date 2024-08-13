import React from 'react'
import AboutImage from '/assets/about-me.svg'

const About = ({about}) => {
  const {title, paraOne, paraTwo, paraThree} = about;
  return (
    <div id='about' className="flex section-height items-center bg-primary-200">
      <div className="container grid place-items-center gap-12 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20">
        <div className="grid gap-4">
          <img className="w-full h-full object-contain" src={AboutImage} alt="about" />
        </div>
        <div className="grid gap-4 font-semibold text-white">
          <h2 className="text-3xl font-bold text-primary-100 md:text-6xl">{title}</h2>
          <p>{paraOne}</p>
          <p>{paraTwo}</p>
          <p>{paraThree}</p>
        </div>
      </div>
    </div>
  )
}

export default About