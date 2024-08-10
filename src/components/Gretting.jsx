import React from 'react'
import GreetingImage from '/assets/greeting.svg'

const Gretting = ({greetings}) => {
  const {greeting, name, title, paraOne, paraTwo} = greetings
  return (
    <section id='greeting' className="flex section-height items-center bg-primary-400 bg-noise">
      <div className="container grid place-items-center gap-12 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20">
        <div className="grid cursor-default gap-4">
          <span className="text-primary-200">{greeting}</span>
          <h1 className="text-4xl font-bold md:text-6xl">{name}</h1>
          <p className="text-xl italic md:text-2xl">{title}</p>
          <p className="font-semibold">{paraOne}</p>
          <p className="font-semibold">{paraTwo}</p>
        </div>
        <div className="grid">
          <img className="w-full h-full object-contain" src={GreetingImage} loading="lazy" />
        </div>
      </div>
    </section>
  )
}

export default Gretting