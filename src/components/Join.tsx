import React from 'react'
import Container from './common/Container'
import SubHeading from './common/SubHeading'
import BoxBlur from './common/BoxBlur'
import layer from '../assets/webp/layer.webp'
import catalog from '../assets/webp/catalog.webp'
import quotient from '../assets/webp/quotient.webp'
import circools from '../assets/webp/circooles.webp'
import sisphyus from '../assets/webp/sisphyus.webp'
import Image, { StaticImageData } from 'next/image'

interface LogoDetails {
  image: string | StaticImageData;
}

export const Logos: LogoDetails[] = [
  { image: layer },
  { image: catalog },
  { image: quotient },
  { image: circools },
  { image: sisphyus },
  { image: catalog },
];

const firstTwoLogos = Logos.slice(0, 2);
const middleTwoLogos = Logos.slice(2, 4);
const lastTwoLogos = Logos.slice(4, 6);


const Join: React.FC = () => {
  return (
    <div className='pt-[109px] pb-[116px] bg-[#EFEFEF] relative'>
      <Container>
        <div className='flex justify-between  '>
          <BoxBlur className='absolute bottom-0 left-0' />
          <BoxBlur className='absolute top-0 right-0' />
          <div className='w-[44%] '>
            <SubHeading>
              Join 4,000+ companiesw <span className='textpurple'>already growing</span>
            </SubHeading>
          </div>
          <div className='w-1/2'>
            <div className="grid grid-cols-2 w-fit gap-x-[52px]">
              {firstTwoLogos.map((item, index) => (
                <Image
                  src={item.image}
                  alt="logo"
                  key={index}
                  className="w-fit  h-[54px]"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-x-[52px] mt-[47px] ml-[80px] w-fit">
              {middleTwoLogos.map((item, index) => (
                <Image
                  src={item.image}
                  alt="logo"
                  key={index}
                  className="w-fit h-[54px]"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 mt-[47px] w-fit gap-x-[52px]">
              {lastTwoLogos.map((item, index) => (
                <Image
                  src={item.image}
                  alt="logo"
                  key={index}
                  className="w-fit h-[60px]"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Join