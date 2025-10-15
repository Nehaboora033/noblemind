import React from 'react'

interface SubHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({ className = "", children, ...props }) => {
  return (
    <h2
      {...props}
      className={`${className} font-bold text-[48px] leading-[110%] capitalize`}>
      {children}
    </h2>
  )
}

export default SubHeading