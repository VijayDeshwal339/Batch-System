import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import First from './components/First'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Header/>
      <First/>
      <Features/>
      <Testimonials/>
      <FAQ/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App