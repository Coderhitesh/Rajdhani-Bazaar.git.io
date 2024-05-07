import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import OurCollection from './Components/OurCollection/OurCollection'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/collection' element={<OurCollection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
