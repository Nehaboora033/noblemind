"use client";
import React from 'react'
import Button from './Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/utils/icons'
import Container from './Container'
import { Navlinks } from '@/utils/helper'

const Header = () => {
    const pathname = usePathname(); // ✅ get current URL path

    return (
        <div className="py-[17px]">
            <Container className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Logo />
                </Link>

                {/* Navigation */}
                <nav className="flex items-center justify-center gap-[32px]">
                    {Navlinks.map((item, index) => {
                        const isActive = pathname === item.path; // ✅ check active route
                        return (
                            <Link
                                key={index}
                                href={item.path}
                                className={`
                  relative font-normal text-[16px] leading-[150%]
                  transition-colors duration-200
                  ${isActive ? "" : "text-black"}
                  hover-purple
                `}
                            >
                                {item.name}
                                {/* underline effect */}
                                <span
                                    className={`
                    absolute left-0 -bottom-1 h-[2px] w-full purple
                    transition-transform duration-300
                    ${isActive ? "scale-x-100" : "scale-x-0"}
                    hover:scale-x-100 origin-left
                  `}
                                ></span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Button */}
                <Button className='gradientpurple'>Contact Us</Button>
            </Container>
        </div>
    )
}

export default Header