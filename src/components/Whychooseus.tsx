import React from 'react'
import Container from './common/Container'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import { Choose_Data } from '@/utils/helper'
import { Check } from '@/utils/icons'
import BoxBlur from './common/BoxBlur'
import Image from 'next/image'
import image from '../assets/webp/chooseimg.webp'

const Whychooseus = () => {
  return (
    <div className='py-[152px] overflow-hidden relative '>
      <Container className=''>
        <div className='flex justify-between mb-[52px]'>
          <SubHeading className=''>
            Why <span className='textpurple'>Choose</span> Us
          </SubHeading>
          <Description className='max-w-[666px] w-full'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id nisi euismod, porttitor quam sit amet, efficitur lectus. Mauris eget pulvinar ante. Fusce posuere, mi in pretium consequat, sem augue eleifend lorem, ut blandit libero neque vitae ex. Aenean interdum a arcu aliquam imperdiet.
          </Description>
        </div>
        <Image src={image} alt='imagechoose' height={462} className='rounded-[16px]' />
        <BoxBlur className='absolute top-0 right-0 z-0' />
        <BoxBlur className='absolute bottom-0 left-0 z-0' />
        <div className='grid grid-cols-2 gap-[24px] mt-[52px]'>
          {Choose_Data.map((item, index) => (
            <div className='border-[0.5px] border-[#0000003D] flex z-[1] flex-col rounded-[16px] p-3 cursor-pointer hover-shadow' key={index}>
              <div className='flex gap-2 items-center mb-4'>
                <div className='gradientlightpurple w-[24px] flex-shrink-0 h-[24px] rounded-full flex items-center justify-center'>
                  <Check />
                </div>
                <SubHeading className='!text-[16px]'>
                  {item.title}
                </SubHeading>
              </div>
              <Description>
                {item.text}
              </Description>
              <div>

              </div>
            </div>
          ))}
        </div>
      </Container>

    </div>
  )
}

export default Whychooseus