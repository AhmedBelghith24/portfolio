import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Talk from './components/Talk'
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 400 }) // Set animation duration (in ms)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* White container */}
      <div className="mx-auto max-w-7xl bg-white rounded-md shadow-lg overflow-hidden">
        {/* Navbar with no extra padding so it's flush with the top */}
        <div className="p-0">
          <Navbar />
        </div>
        {/* Hero with internal padding */}
        <div className="p-16">
          <div data-aos="fade-up">
            <Hero />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <About />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <Skills />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <Projects />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Talk />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
