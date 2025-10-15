import React from 'react'
import Container from './common/Container'
import Heading from './common/Heading'
import Description from './common/Description'
// import Image from 'next/image'
// import heroimage from '../assets/webp/heroimage.webp'
import Button from './common/Button'
import BoxBlur from './common/BoxBlur'


const Hero = () => {
  return (
    <div className='pt-[44px] pb-[47px] relative'>
      <Container>
        <Heading className='mx-auto'>
          Elevate Your Solutions with <span className='textpurple'>Noble Mind IT </span>
        </Heading>
        <Description className='text-center max-w-[829px] w-full mx-auto'>
          At Noble Mind IT, we&apos;re dedicated to taking your IT solutions to new heights. In today&aspos;s ever-evolving technological landscape, having a trusted partner to elevate your IT infrastructure is paramount.
        </Description>
        <BoxBlur className='absolute top-0 left-[20px]'/>
         <BoxBlur className='absolute top-[60%] right-[20px]'/>
        {/* <div className="w-[1139px] mx-auto">
          <Image
            src={heroimage}
            alt="hero image"
            width={1139}
            height={513}
            className="object-cover"
          />
        </div> */}

        <div className='flex justify-center mt-[45.8px]'>
          <Button className='gradientpurple'>
            Get Started
          </Button>
        </div>

      </Container>
    </div>
  )
}

export default Hero