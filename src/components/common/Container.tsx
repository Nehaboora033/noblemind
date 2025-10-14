import React from 'react'

interface ContainerProps {
    className?: string;
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
    return (
        <div className={`${className} max-w-[1164px] mx-auto px-3`}>
            {children}
        </div>
    )
}

export default Container