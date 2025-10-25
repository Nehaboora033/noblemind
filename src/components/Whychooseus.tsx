import React from 'react'
import Container from './common/Container'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import { Check } from '@/utils/icons'
import BoxBlur from './common/BoxBlur'
import Image from 'next/image'
import image from '../assets/webp/chooseimg.webp'


interface Choosedetails {
  title: string;
  text: string;
}


export const Choose_Data: Choosedetails[] = [
  {
    title: 'Customer-Centric',
    text: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.',
  },
  {
    title: 'Global Resonance',
    text: 'Share insights and innovations that have a positive impact across borders and sectors.',
  },
  {
    title: 'Ethical Leadership',
    text: 'Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.',
  },
  {
    title: 'Innovation',
    text: 'Stay at the vanguard of technological transformation, redefining futures and driving excellence in all our offerings.',
  },
  {
    title: 'Commitment to Vision 2030',
    text: "Align with and champion Saudi Arabia's technological and societal aspirations.",
  },
  {
    title: 'Collaboration',
    text: 'Forge strategic partnerships across industries and institutions, emphasizing both global and local advancements.',
  },
  {
    title: 'Social Responsibility',
    text: 'Dedicate ourselves to uplifting communities, driving positive change, and promoting sustainable practices in both business and societal arenas.',
  },
  {
    title: 'Workplace Harmony',
    text: ' Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family.',
  },
]


const Whychooseus: React.FC = () => {
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
        <Image src={image} alt='imagechoose' height={462} priority className='rounded-[16px]' />
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
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Whychooseus