import React from 'react'
import Containter from './components/containter'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Preloader from './components/Preloader/Preloader'

const App = () => {
  return (
    <Containter>
      <Preloader />
      <Navbar />
      <Hero />
    </Containter>

  )
}

export default App