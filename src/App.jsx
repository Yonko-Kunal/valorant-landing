import React from 'react'
import Containter from './components/Containter'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Preloader from './components/Preloader/Preloader'
import Cypher from './components/Cypher/Cypher'
import ReactLenis from 'lenis/react'
import About from './components/About/About'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <ReactLenis root>
      <Containter>
        <Preloader />
        <Navbar />
        <Hero />
        <Cypher />
        <About />
        <Footer />
      </Containter>
    </ReactLenis>

  )
}

export default App