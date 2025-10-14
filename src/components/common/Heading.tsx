import React from 'react'


interface HeadingProps {
    children: React.ReactNode;
    className?: string
}
const Heading: React.FC<HeadingProps> = ({ className, children }) => {
    return (
        <h1 className={`${className} font-bold text-[64px] leading-[110%] capitalize`}>
            {children}
        </h1>
    )
}

export default Heading

