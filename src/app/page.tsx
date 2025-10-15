import Getstarted from '@/components/Getstarted'
import Hero from '@/components/Hero'
import Join from '@/components/Join'
import Ourmission from '@/components/Ourmission'
import Ourservices from '@/components/Ourservices'
import Ourvision from '@/components/Ourvision'
import Whychooseus from '@/components/Whychooseus'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Ourmission />
      <Ourvision />
      <Ourservices />
      <Whychooseus />
      <Join />
      <Getstarted />
    </div>
  )
}

export default page