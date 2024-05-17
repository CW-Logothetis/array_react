// Footer.js
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p style={{fontSize: 'var(--step--1)'}}>MethodMinder &nbsp; &copy; {currentYear} &nbsp; C.W. Mounsey-Logothetis</p>
        </footer>
    );
};

export default Footer;
