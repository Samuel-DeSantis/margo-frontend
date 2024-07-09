import React from 'react'
import Hero from './components/Hero'
import TwoCol from './components/TwoCol'

function Home() {
  return (
    <main className='px-8 pt-40 md:pt-80 md:px-28'>
      <Hero />
      <TwoCol />
    </main>
  )
}

export default Home