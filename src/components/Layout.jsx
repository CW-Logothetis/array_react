import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <main>{children}</main>
        </>
    );
}

export default Layout;