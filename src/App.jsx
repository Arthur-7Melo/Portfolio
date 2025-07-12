import { useState } from 'react'
import About from './sections/About'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-grow'>
        <About />
      </main>
    </div>
  )
}

export default App
