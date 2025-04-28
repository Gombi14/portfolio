import React from 'react';
const Header = () => {
    return (
        <header className='text-white flex h-[80px] justify-between items-center fixed w-screen'>
            <h1 className='text-2xl p-4'>Welcome to My Website</h1>
            <nav className='pr-3'>
                <a href="#home" className='p-3 hover:underline'>Home</a>
                <a href="#about" className='p-3 hover:underline'>About</a>
                <a href="#contact" className='p-3 hover:underline'>Contact</a>
            </nav>
        </header>
    );
};
export default Header;