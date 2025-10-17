import React from 'react'
import Container from './Container'
import Image from 'next/image'
import logo from '../../assets/webp/Logofooter.webp'
import Description from './Description'
import Link from 'next/link'
import { Facebook, Insta, Linkedin, Message, Phone } from '@/utils/icons'



interface SocialIcon {
  icon: React.ElementType;
  link: string,
}

export const Socail_Icons: SocialIcon[] = [
  {
    icon: Insta,
    link: 'https://www.instagram.com/',

  },
  {
    icon: Facebook,
    link: 'https://www.facebook.com/',
  },
  {
    icon: Linkedin,
    link: 'https://in.linkedin.com/',
  },
]

// 1️⃣ Define the type for a link item
type FooterLinkItem = {
  name: string;
  path: string;
  icon?: React.ElementType; //  optional icon property
};

// 2️⃣ Define the type for a footer section
type FooterSection = {
  title: string;
  link: FooterLinkItem[];
};

// 3️⃣ Use the type in your array
export const Footer_Links: FooterSection[] = [
  {
    title: "Main Menu",
    link: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "about" },
      { name: "How it Works", path: "/" },
      { name: "Why Choose Us", path: "/" },
      { name: "Steps", path: "/" },
    ],
  },
  {
    title: "Legal",
    link: [
      { name: "Terms", path: "/" },
      { name: "Privacy", path: "/" },
    ],
  },
  {
    title: "Contact Info",
    link: [
      { icon: Phone, name: "+0000000000", path: "tel:+0000000000" },
      { icon: Message, name: "info@noblemindit.gmail.com", path: "mailto:info@noblemindit.gmail.com" },
    ],
  },
];


const Footer: React.FC = () => {
  const currentYear = new Date();

  return (
    <div className='bg-black pt-[91px]'>
      <Container>
        <div className='flex gap-[48px] pb-[153px]'>
          <div className='max-w-[385px] w-full '>
            <div>
              <Link href={'/'}>
                <Image src={logo} alt='logo' className='mb-4' />
              </Link>

              <Description className='!text-[#CCCCCC] mb-[24px]'>
                Join us on the journey to embrace the future. Experience the transformational impact of AI and automation with Algominds.
              </Description>
              <div className='flex gap-3'>
                {Socail_Icons.map((item, index) => (
                  <div className='w-[32px] h-[32px] hover:translate-y-[-10px] transition-all duration-150 ease-in-out cursor-pointer bg-[#292929] flex items-center justify-center rounded-full' key={index}>
                    <item.icon />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='max-w-[707px] w-full'>
            <div className='flex justify-between'>
              {Footer_Links.map((item, index) => (
                <ul key={index} className=''>
                  <li className='white font-bold text-[16px] mb-3 leading-[150%]'>
                    {item.title}
                  </li>
                  {item.link.map((linkitem, i) => {
                    const Icon = linkitem.icon;
                    return (
                      <li key={i} className='flex gap-4 items-center'>
                        {Icon && <Icon />}
                        <Link href={linkitem.path} className='text-[#CCCCCC] hover:text-white transition-colors ease-in-out duration-150  mb-3 font-normal text-[16px] leading-[150%]'>
                          {linkitem.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="relative footer-border pt-6 pb-[28px] text-center">
          <p className="text-[14px] text-[#AFAFAF]">
            © Noble Mind IT {currentYear.getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Footer