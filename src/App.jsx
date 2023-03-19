import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Legend from './components/Legend'
import Navmap from './components/Navmap'
import Wave from './components/Wave'
import CTA from './components/CTA'
import Footer from './components/Footer'

import DestCard from './components/DestinationCard'

import destData from './data/destdata.js'


function App() {

  const destdata = destData.map( (dest) => {
    console.log(dest)
    return <DestCard {...dest} />
  })

  return (
    <>
      <Header />
      <Hero />
      <Legend />
      <Navmap />
      <div className="sidepad"
      style={{background: 'var(--yellow)', paddingTop: '50px'}}>
        <h2 className='dest__title'>Destinations</h2>
        <div className="desti sidepad">
          {destdata}
        </div>
      </div>
      <Wave />
      <CTA />
      <Footer />

    </>
  )
}

export default App
