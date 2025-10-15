import React from "react";

//  Extend built-in <button> element props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

//  Define the component
const Button: React.FC<ButtonProps> = ({ className = "", children, ...props }) => {
  return (
    <button
      {...props} // spread all other props like onClick, disabled, type, etc.
      className={`rounded-[61px] py-[16px] px-[42px] white cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;