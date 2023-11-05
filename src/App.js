import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar.js"
import Home from "./pages/Home.js"
import About from './pages/About.js'
import SupportUs from './pages/SupportUs.js'
import Contacts from './pages/Contacts.js'
import OurRobots from './pages/OurRobots.js'
import Newsletter from './pages/Newsletter.js'

export default function App() {
  return (
    <>
      <Navbar />
      <div className='navigation'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/support-us' element={<SupportUs />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/newsletter' element={<Newsletter />} />
          <Route path='/our-robots' element={<OurRobots />} />
        </Routes>
      </div>
    </>
  )
}
