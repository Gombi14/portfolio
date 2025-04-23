import React from 'react';
const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Welcome to My Website</h1>
            <nav style={styles.nav}>
                <a href="#home" style={styles.link}>Home</a>
                <a href="#about" style={styles.link}>About</a>
                <a href="#contact" style={styles.link}>Contact</a>
            </nav>
        </header>
    );
};
export default Header;