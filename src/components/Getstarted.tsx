import React from 'react'
import Container from './common/Container'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import Button from './common/Button'
import Image from 'next/image'
import waves from '../assets/png/waves.png'

const Getstarted: React.FC = () => {
  return (
    <div className='pt-[152px] pb-[148px]'>
      <Container className='overflow-hidden relative'>
        <div className='rounded-[16px] gradientpurple py-[82px] px-[30px] '>
          <div className='max-w-[820px]  mx-auto flex flex-col justify-center '>
            <SubHeading className="text-white text-center mb-4 whitespace-nowrap">
              So, what you’ve been waiting for?
            </SubHeading>
            <Description className='!text-white text-center mb-[42px]'>
              Ipsum integer faucibus eu morbi integer. Tempus in volutpat libero mauris neque dolor pellentesque sagittis. Scelerisque tempor auctor euismod rhoncus non elit molestie sed. Orci quam at varius eget.
            </Description>
            <Button className='bg-white cursor-pointer !text-[#9561ED] font-bold text-[16px] whitespace-nowrap max-w-[174px] mx-auto'>
              Get Started
            </Button>
          </div>
        </div>
        <Image src={waves} alt='waves' className='absolute -top-[75%] left-0 object-cover ' />
        <Image src={waves} alt='waves' className='absolute -bottom-[70%] left-0 object-cover ' />
      </Container>

    </div>
  )
}

export default Getstarted