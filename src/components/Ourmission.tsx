import React from 'react'
import Container from './common/Container'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import Button from './common/Button'

const Ourmission = () => {
  return (
    <div className='pt-[124px]'>
      <Container className=''>
        <div className='flex gap-[42px]'>
          <div className='w-[49%]'>

          </div>
          <div className='w-[49%] '>
            <SubHeading className='mb-4'>
              Our <span className='textpurple'> Mission</span>
            </SubHeading>
            <Description className='black mb-[42px]  '>
              In our commitment to excellence, we create value across these diverse sectors. In Healthcare, we seek to improve patient outcomes and make healthcare more accessible. In Education, we aim to revolutionize learning experiences, empowering individuals with knowledge. In Finance, we strive to enhance financial services, making them more inclusive and efficient. In Marketing, we harness the power of data and AI to drive innovation and growth.
            </Description>
            <Button className='gradientpurple'>
              Read More
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Ourmission