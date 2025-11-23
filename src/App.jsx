import React from 'react'
import Containter from './components/Containter'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import NavMobile from './components/NavMobile/NavMobile'
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
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="md:hidden">
          <NavMobile />
        </div>
        <Hero />
        <Cypher />
        <About />
        <Footer />
      </Containter>
    </ReactLenis>

  )
}

export default App