import React from 'react'
import Containter from './components/containter'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Preloader from './components/Preloader/Preloader'
import Cypher from './components/Cypher/Cypher'

const App = () => {
  return (
    <Containter>
      <Preloader />
      <Navbar />
      <Hero />
      <Cypher />
    </Containter>

  )
}

export default App