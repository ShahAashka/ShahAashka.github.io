import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homs from './components/Homs'
import Gretting from './components/Gretting'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

function App() {
  return (
    <>
     <NavBar sticky="top" />
     <Routes>
      <Route path='/' element={<Homs />}>
        <Route path='/#greeting' id='greeting' element={<Gretting />} />
        <Route path='/#about' id='about' element={<About />} />
        <Route path='/#projects' id='projects' element={<Projects />} />
        <Route path='/#contact' id='contact' element={<Contact />} />
      </Route>
     </Routes>
    </>
  )
}

export default App
