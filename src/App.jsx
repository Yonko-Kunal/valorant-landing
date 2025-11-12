import React from 'react'
import Containter from './components/containter'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Preloader from './components/Preloader/Preloader'
import Cypher from './components/Cypher/Cypher'
import ReactLenis from 'lenis/react'


const App = () => {
  return (
    <ReactLenis root>
      <Containter>
        <Preloader />
        <Navbar />
        <Hero />
        <Cypher />
      </Containter>
    </ReactLenis>

  )
}

export default App