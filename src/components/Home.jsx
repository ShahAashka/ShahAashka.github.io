import React, { useState, useEffect } from 'react'
import Gretting from './Gretting'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import useFetchData from '../hooks/useFetchData'

const Home = () => {
  const {data, loading} = useFetchData();
  const [greetings, setGreetings] = useState({})
  const [about, setAbout] = useState({})
  const [contact, setContact] = useState({})

  useEffect(() => {
      const { greetingSection: greeting , aboutSection: aboutMe, contactSection: contactMe } = data;
      if (greeting) {
        setGreetings(greeting);
      }
      if(aboutMe){
        setAbout(aboutMe)
      }
      if(contactMe){
        setContact(contactMe)
      }
    }, [data, setGreetings, setAbout, setContact])

  if(loading){
    return null;
  }
  return (
    <>
      <Gretting greetings={greetings}/>
      <About about={about}/>
      {/* <Projects /> */}
      <Contact contact={contact}/>
    </>
  )
}

export default Home