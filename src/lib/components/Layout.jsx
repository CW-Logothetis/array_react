import React from 'react';
import { Outlet } from "react-router-dom"
import Header from './Header';
import Footer from './Footer';

// Outlet is kinda like passing {children} to Layout in a slot,
// but is specific to React Router whereby the Layout is placed in its own parent route, with the rest nested inside.
const Layout = () => {
    return (
        <div className="site-wrapper">
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
