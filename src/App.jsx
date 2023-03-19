import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Legend from './components/Legend'
import Navmap from './components/Navmap'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Header />
      <Hero />
      <Legend />
      <Navmap />
      <Footer />
    </>
  )
}

export default App
