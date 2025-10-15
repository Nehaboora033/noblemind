import React from "react";

//  Extend built-in <h1> element props
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    className?: string;
    children: React.ReactNode;
}

//  Define component
const Heading: React.FC<HeadingProps> = ({ className = "", children, ...props }) => {
    return (
        <h1
            {...props}
            className={`font-bold text-[64px] leading-[110%] capitalize max-w-[948px] mb-4  text-center w-full ${className}`}
        >
            {children}
        </h1>
    );
};

export default Heading;