import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo_methodMinder.png'

import './layout/layout.css'

export default function Header() {

    return (
        <header>
            <div className="header-links">
                <Link className="site-logo" to="/"> <img src={logo} alt="Site logo"/></Link>
                <nav>
                    <NavLink
                        to="/"
                        className={({isActive}) => isActive ? "active-link" : null}
                    >
                        Study
                    <
                /NavLink>
                    <NavLink
                        to="/arrays"
                        className={({isActive}) => isActive ? "active-link" : null}
                    >
                        Arrays
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};
