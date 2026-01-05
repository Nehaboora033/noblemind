import React from 'react'
import Container from './common/Container'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import Button from './common/Button'
import img1 from '../assets/webp/ourmissionimg1.webp'
import img2 from '../assets/webp/ourmissionimg2.webp'
import img3 from '../assets/webp/ourmissionimg3.webp'
import img4 from '../assets/webp/ourmissionimg4.webp'
import Image, { StaticImageData } from 'next/image'
import BoxBlur from './common/BoxBlur'
import icon from '../assets/webp/missionicon.webp'

interface ImagesDetails {
  image: string | StaticImageData;
}

export const MissionImages: ImagesDetails[] = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },

]

const leftColumn = MissionImages.slice(0, 2);
const rightColumn = MissionImages.slice(2, 4);

const Ourmission: React.FC = () => {
  return (
    <div className='pt-[124px] relative'>
      <Container className=''>
        <div className='flex justify-between gap-[42px]'>
          <div className='w-[51%] '>

            <div className='w-[88px] h-[88px] bg-white z-[2] rounded-full flex items-center justify-center absolute top-[52%] left-[27%]' >
              <Image
                src={icon}
                alt="icon"
                className="object-cover"
              />
            </div>
            <div className='flex gap-x-[10px]'>
              <div className='grid grid-cols-1 gap-y-[10px] '>
                {leftColumn.map((item, index) => (
                  <Image
                    src={item.image}
                    alt="logo"
                    key={index}

                    className="w-[276px] h-[276px] rounded-[8px] object-cover flex z-[1]"
                  />
                ))}
              </div>
              <div className='grid grid-cols-1 gap-y-[10px] w-fit mt-[9px]'>
                {rightColumn.map((item, index) => (
                  <Image
                    src={item.image}
                    alt="logo"
                    key={index}
                    className="w-[276px] h-[276px] rounded-[8px] object-cover flex z-[1]"
                  />
                ))}
              </div>
            </div>
            <BoxBlur className='absolute top-[45%] left-[22%] flex z-[0]' />
            <BoxBlur className='absolute  bottom-0 left-0' />
            <BoxBlur className='absolute  bottom-0 right-0' />
          </div>
          <div className='w-[48%] flex justify-center flex-col'>
            <SubHeading className='mb-4'>
              Our <span className='textpurple'> Mission</span>
            </SubHeading>
            <Description className='black mb-[42px]  '>
              In our commitment to excellence, we create value across these diverse sectors. In Healthcare, we seek to improve patient outcomes and make healthcare more accessible. In Education, we aim to revolutionize learning experiences, empowering individuals with knowledge. In Finance, we strive to enhance financial services, making them more inclusive and efficient. In Marketing, we harness the power of data and AI to drive innovation and growth.
            </Description>
            <Button className='gradientpurple w-[167px]'>
              Read More
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Ourmission