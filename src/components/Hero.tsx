import React from 'react'
import Container from './common/Container'
import Heading from './common/Heading'
import Description from './common/Description'
import Button from './common/Button'
import BoxBlur from './common/BoxBlur'
import Image from 'next/image'
import image from '../assets/webp/chooseimg.webp'
import ring from '../assets/webp/ring.webp'


const Hero: React.FC = () => {
  return (
    <div className='pt-[44px] pb-[47px] relative'>
      <Container>
        <Heading className='mx-auto'>
          Elevate Your Solutions with <span className='textpurple'>Noble Mind IT </span>
        </Heading>
        <Description className='text-center max-w-[829px] w-full mx-auto mb-[67px]'>
          At Noble Mind IT, we&apos;re dedicated to taking your IT solutions to new heights. In today&aspos;s ever-evolving technological landscape, having a trusted partner to elevate your IT infrastructure is paramount.
        </Description>
        <BoxBlur className='absolute top-0 left-[20px]' />
        <BoxBlur className='absolute top-[60%] right-[20px]' />
        <div className='relative shadow-box'>
          <Image src={image} alt='heroimage' height={513} priority className='rounded-[16px] object-cover flex z-[1]  ' />
          <Image src={ring} alt='ring' className='object-cover w-[101px] h-[101px] bottom-[-50px] right-[-50px] absolute z-[-1]' />
          <Image src={ring} alt='ring' className='object-cover absolute top-[-50px] left-[-50px] z-[-1] flex ' />

          <div className="left-1/2 -translate-x-1/2  w-[997px] h-[110px] absolute bottom-[50px] rounded-[12px] overflow-hidden flex justify-between items-center px-[32px] py-[22px] z-[2]">
            {/* Blurred red background */}
            <div className="absolute inset-0 gradientbox backdrop-blur-[30px] z-[1]"></div>
            {/* Foreground content */}
            <div className="flex items-center gap-3 z-[2]">
              <p className="font-bold text-[60px] leading-[110%] text-white">8+</p>
              <Description className="!text-white">
                Years of <br /> Experience
              </Description>
            </div>

            <div className="w-[1px] h-full line-gradient z-[2]"></div>

            <div className="flex items-center gap-3 z-[2]">
              <p className="font-bold text-[60px] leading-[110%] text-white">50+</p>
              <Description className="!text-white">
                Successful <br /> Projects
              </Description>
            </div>

            <div className="w-[1px] h-full line-gradient z-[2]"></div>

            <div className="flex items-center gap-3 z-[2]">
              <p className="font-bold text-[60px] leading-[110%] text-white">30+</p>
              <Description className="!text-white">
                Satisfied <br /> Customers
              </Description>
            </div>
          </div>


        </div>
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