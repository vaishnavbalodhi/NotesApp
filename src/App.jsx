import { useState } from 'react'
import './App.css'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Foreground from './components/Foreground'

function App() {

  return (
    <>
      <div className='relative w-full h-screen bg-zinc-800'>
        {/* <div className='w-full h-screen fixed z-40'>
          
        </div> */}
        <Navbar />
        <Background />
        <Foreground />
      </div>
    </>
  )
}

export default App
