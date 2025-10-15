import React from 'react'
import Container from './common/Container'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import { Vision_Data } from '@/utils/helper'
import { Check } from '@/utils/icons'
import Image from 'next/image'
import visionimage from '../assets/webp/visionimage.webp'

const Ourvision = () => {
  return (
    <div className='py-[152px]'>
      <Container>
        <div className='flex justify-between  gap-[62px] items-center'>
          {/* Left Section */}
          <div className='max-w-[462px] w-full'>
            <SubHeading className='mb-4'>
              Our <span className='textpurple'>Vision</span>
            </SubHeading>

            <Description className='mb-6'>
              The future of how we live, work, and learn. We see a world where technology is not just a tool but a transformative force for good, reshaping every aspect of human existence.
            </Description>

            {Vision_Data.map((item, index) => (
              <div className="gradient-border mb-3" key={index}>
                <div className="inner flex gap-[10px] items-start">
                  <div className="w-8 h-8 flex-shrink-0 rounded-full gradientlightpurple flex items-center justify-center">
                    <Check />
                  </div>
                  <Description>{item.text}</Description>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className='max-w-[615px] w-full flex justify-center'>
            <div className='w-[615px] h-[519px] relative'>
              <Image
                src={visionimage}
                alt='Vision image'
                fill
                className='object-contain rounded-2xl'
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Ourvision