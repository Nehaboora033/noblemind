import React from 'react'

interface BoxProps {
    className?: string;
}

const BoxBlur: React.FC<BoxProps> = ({ className="" }) => {
    return (
        <div className={`${className} size-[220px] gradientpurple blur-[180px]`}>
        </div>
    )
}

export default BoxBlur