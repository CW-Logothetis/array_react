import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

function Layout({ children }) {
    return (
        <div className="layout">
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <main>{children}</main>
        </div>
    );
}

export default Layout;