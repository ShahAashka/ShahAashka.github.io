import React from 'react'
import ContactImage from '/assets/contact.svg'

const Contact = ({contact}) => {
  const {title, paraOne, paraTwo, cta} = contact
  return (
    <div id='contact' className="flex last-section-height items-center bg-primary-400 bg-noise">
     <div className="container grid place-items-center gap-12 max-lg:py-12 lg:grid-cols-2 lg:gap-20">
        <div className="grid gap-4 font-semibold">
          <h2 className="text-3xl font-bold md:text-6xl">{title}</h2>
          <p>{paraOne}</p>
          <p>{paraTwo}</p>
          <div className="group inline-block w-fit">
            <button
              className="inline-block rounded-md border border-primary-300 bg-white px-4 py-2.5 font-semibold transition duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[-4px_4px_0px_0px_#3a10e5]"
              onClick={() => window.location = "mailto:aashka.acharya1@gmail.com"}>
                {cta}
            </button>
          </div>
        </div>
        <div className="gird">
          <img className="w-full h-full object-contain" src={ContactImage} loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default Contact