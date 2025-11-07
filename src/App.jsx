import React from 'react'
import Containter from './components/containter'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <Containter>
      <Navbar />
      <Hero />
    </Containter>

  )
}

export default App