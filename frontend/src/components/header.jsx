import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ onContactClick }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const inicioSection = document.getElementById('inicio');
            if (inicioSection) {
                const sectionBottom = inicioSection.offsetTop + inicioSection.offsetHeight;
                setScrolled(window.scrollY > sectionBottom);
            } else {
                setScrolled(window.scrollY > 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const shouldShowBackground = scrolled || menuOpen;

    return (
        <header
            className={`text-white flex justify-between items-center fixed w-screen h-[80px] transition-colors duration-300 z-50 px-4 ${
                shouldShowBackground ? 'bg-[#000236] shadow-[#000044] shadow-2xl' : 'bg-transparent'
            }`}
        >
            <h1 className="text-4xl">Port<span className='text-amber-200'>folio</span></h1>

            <button
                onClick={toggleMenu}
                className="xl:hidden text-white z-50"
                aria-label="Toggle menu"
            >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <nav
                className={`${
                    menuOpen ? 'flex' : 'hidden'
                } flex-col absolute top-[80px] left-0 w-full justify-end bg-[#000236] text-white items-center gap-4 py-4 xl:flex xl:flex-row xl:static xl:bg-transparent xl:gap-6 xl:py-0 xl:items-center`}
            >
                <a href="/#inicio" className="hover:underline xl:w-fit w-full text-center" onClick={() => setMenuOpen(false)}>Inicio</a>
                <a href="/#sobre-mi" className="hover:underline xl:w-fit w-full text-center" onClick={() => setMenuOpen(false)}>Experiencia</a>
                <a href="/#tecnologias" className="hover:underline xl:w-fit w-full text-center" onClick={() => setMenuOpen(false)}>Tecnologías</a>
                <a href="/#formacion" className="hover:underline xl:w-fit w-full text-center" onClick={() => setMenuOpen(false)}>Formación</a>
                <a href="/#proyectos" className="hover:underline xl:w-fit w-full text-center" onClick={() => setMenuOpen(false)}>Proyectos</a>
                <a onClick={() => { setMenuOpen(false); onContactClick(); }} className="hover:underline cursor-pointer xl:w-fit w-full text-center">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
