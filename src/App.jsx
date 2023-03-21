import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Legend from './components/Legend'
import Navmap from './components/Navmap'
import Wave from './components/Wave'
import CTA from './components/CTA'
import Footer from './components/Footer'

import DestCard from './components/DestinationCard'
import TestimonialCard from './components/TestimonialCard'

import destData from './data/destdata.js'
import testimonialData from './data/testimonialdata.js'


function App() {

  const cardVariant = {
    offscreen: {
      x: -300,
      scale: 0
    },
    onscreen: {
      x: 0,
      scale: 1
    }
  }
  const destdata = destData.map( (dest) => {
    return <DestCard {...dest} />
  })

  const testidata = testimonialData.map(
    (indiv) => {
      return <TestimonialCard {...indiv} />
    }
  )

  return (
    <>
      <Header />
      <Hero />
      <Legend />
      <Navmap />

      {/* <!-- Destination Section --> */}
      <div className="sidepad"
      style={{background: 'var(--yellow)', paddingTop: '50px'}}>
        <h2 className='dest__title'>Destinations</h2>
        <div className="desti sidepad">
          {destdata}
        </div>
      </div>
      <Wave />
      {/* <!-- End of Destination Section --> */}
      
      {/* <!-- Testimonial Section --> */}
      <div className="sidepad testimonial">
        <h2>Testimonials</h2>
        <div className="testimonial__container">
          {testidata}
        </div>
      </div>
      {/* <!-- End of Testimonial Section --> */}
      
      <CTA />
      <Footer />

    </>
  )
}

export default App
