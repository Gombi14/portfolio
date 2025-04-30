import React, { useEffect, useState } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const inicioSection = document.getElementById('inicio');
            if (inicioSection) {
                const sectionBottom = inicioSection.offsetTop + inicioSection.offsetHeight;
                setScrolled(window.scrollY > sectionBottom);
            } else {
                setScrolled(window.scrollY > 0); // fallback
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`text-white flex h-[80px] justify-between items-center fixed w-screen transition-colors duration-300 z-50 ${
                scrolled ? 'bg-[#000236]' : 'bg-transparent'
            }`}
        >
            <h1 className='text-2xl p-4'>Welcome to My Website</h1>
            <nav className='mr-10 flex gap-3'>
                <a href="#inicio" className='hover:underline'>Inicio</a>
                <a href="#sobre-mi" className='hover:underline'>Sobre mi</a>
                <a href="#tecnologias" className='hover:underline'>Tecnolgias</a>
                <a href="#contact" className='hover:underline'>Contact</a>
            </nav>
        </header>
    );
};

export default Header;
