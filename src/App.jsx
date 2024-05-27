import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/Intro'
import Hero from './components/Hero'
import Features from './components/Features'
import Outro from './components/Outro'
import Footer from './components/Footer'

function App() {

  return (
    <main className='main-wrapper'>
      <Intro/>
      <Hero/>
      <Features/>
      <Outro/>
      <Footer/>
    </main>
  )
}

export default App
