'use client';
import React, { useEffect, useState } from 'react';
import { Arrow } from '@/utils/icons';

const BackToTop: React.FC = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200); // Show after scrolling 200px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!show) return null; // Hide button if not scrolled

    return (
        <button
            onClick={handleBackToTop}
            aria-label="Back to top"
            className="fixed bottom-[15px] sm:bottom-[70px] sm:right-4 right-[10px] w-[50px] h-[50px] flex justify-center items-center  gradientpurple rounded-full  z-50 cursor-pointer transition-transform duration-300 ease-linear hover:scale-110">
            <Arrow />
        </button>
    );
};

export default BackToTop;