import { useState } from 'react'
import About from './sections/About'
import Navbar from './components/Navbar'
import Projects from './sections/Projects'

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow'>
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default App
