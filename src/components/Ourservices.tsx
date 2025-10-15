import React from 'react'
import Container from './common/Container'
import SubHeading from './common/SubHeading'
import { Services_Data } from '@/utils/helper'
import Description from './common/Description'
import BoxBlur from './common/BoxBlur'

const Ourservices = () => {
  return (
    <div className='pt-[119.8px] pb-[122px] relative bg-[#EFEFEF] overflow-hidden'>
      <Container className='' >
        <SubHeading className='flex justify-center mb-[52px]'>
          Our <span className='textpurple'>Services</span>
        </SubHeading>
        <BoxBlur className='absolute bottom-0 left-0 flex z-0' />
        <BoxBlur className='absolute top-0 right-0 flex z-0' />
        <div className='grid grid-cols-3 gap-[24px]'>
          {Services_Data.map((item, index) => (
            <div className='flex z-[1]' key={index}>
              <div className=' rounded-[16px] bg-[#EFEFEF] border-[0.5px] border-[#0000003D] hover-shadow cursor-pointer   p-5 h-[270px]'>
                <div className='gradientlightpurple rounded-full flex items-center justify-center w-[72px] h-[72px] mb-5'>
                  <item.icon />
                </div>
                <div>
                  <SubHeading className='!text-[24px] mb-2'>
                    {item.title}
                  </SubHeading>
                  <Description>
                    {item.text}
                  </Description>
                </div>
              </div>
            </div>


          ))}
        </div>
      </Container>
    </div>
  )
}

export default Ourservices