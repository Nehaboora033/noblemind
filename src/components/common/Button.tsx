import React from 'react'

interface ButtonProps {
  className?: string;
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button className={`${className} purple rounded-[61px] py-[16px] px-[42px] white cursor-pointer`}>
      {children}
    </button>
  )
}

export default Button