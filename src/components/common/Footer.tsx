import React from 'react'
import Container from './Container'
import Image from 'next/image'
import logo from '../../assets/webp/Logofooter.webp'
import Description from './Description'
import { Social_Icons } from '@/utils/helper'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-black pt-[91px]'>
      <Container>
        <div className='flex gap-[48px] pb-[153px]'>
          <div className='max-w-[385px] w-full '>
            <div>
              <Link href={'/'}>
                <Image src={logo} alt='logo' className='mb-4' />
              </Link>

              <Description className='!text-[#FDFCFC] mb-[24px]'>
                Join us on the journey to embrace the future. Experience the transformational impact of AI and automation with Algominds.
              </Description>
              <div className='flex gap-3'>
                {Social_Icons.map((item, index) => (
                  <div className='w-[32px] h-[32px] cursor-pointer bg-[#292929] flex items-center justify-center rounded-full' key={index}>
                    <item.icon />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='max-w-[707px] w-full'>
            hello
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer