import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
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
      <Route path='/' element={<Home />}>
        <Route path='/greeting' element={<Gretting />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
     </Routes>
    </>
  )
}

export default App
