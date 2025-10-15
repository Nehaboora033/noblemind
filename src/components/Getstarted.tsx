import React from 'react'
import Container from './common/Container'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import Button from './common/Button'

const Getstarted = () => {
  return (
    <div className='pt-[152px] pb-[148px]'>
      <Container>
        <div className='rounded-[16px] gradientpurple py-[82px] px-[30px] '>
          <div className='max-w-[820px]  mx-auto flex flex-col justify-center '>
            <SubHeading className="text-white text-center mb-4 whitespace-nowrap">
              So, what you’ve been waiting for?
            </SubHeading>
            <Description className='!text-white text-center mb-[42px]'>
              Ipsum integer faucibus eu morbi integer. Tempus in volutpat libero mauris neque dolor pellentesque sagittis. Scelerisque tempor auctor euismod rhoncus non elit molestie sed. Orci quam at varius eget.
            </Description>
            <Button className='bg-white !text-[#9561ED] font-bold text-[16px] whitespace-nowrap max-w-[174px] mx-auto'>
              Get Started
            </Button>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default Getstarted