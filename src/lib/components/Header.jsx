import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient';
import { AuthContext } from '../../App';
import logo from '../../assets/images/logo_methodMinder.png';
import './layout/layout.css';

export default function Header() {
    const { user } = useContext(AuthContext);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
    };

    return (
        <header>
            <div className="header-links">
                <Link className="site-logo" to="/"> <img src={logo} alt="Site logo" /></Link>
                <nav>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : null}>Study</NavLink>
                    <NavLink to="/arrays" className={({ isActive }) => isActive ? "active-link" : null}>Arrays</NavLink>
                    {user ? (
                        <button onClick={handleSignOut} className='button text-only'>Sign Out</button>
                    ) : (
                        <NavLink to="/auth" className={({ isActive }) => isActive ? "active-link" : null}>Sign In</NavLink>
                    )}
                </nav>
            </div>
        </header>
    );
}

