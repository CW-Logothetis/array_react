// Footer.js
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>&copy; {currentYear} CW Mounsey-Logothetis</p>
        </footer>
    );
};

export default Footer;
