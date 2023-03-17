import { useState } from 'react'
import './App.css'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Legend from './components/Legend.jsx'
import Navmap from './components/Navmap'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Legend />
      <Navmap />  
    </>
  )
}

export default App
