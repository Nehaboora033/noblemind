import React from 'react'

interface DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

const Description: React.FC<DescriptionProps> = ({ children, className = "", ...props }) => {
  return (
    <p
      {...props}
      className={`${className} leading-[150%] font-normal text-[16px] black`}>
      {children}
    </p>
  )
}

export default Description