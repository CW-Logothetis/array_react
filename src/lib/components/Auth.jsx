import React, { useEffect, useState, useContext } from 'react';
import { supabase } from '../../services/supabaseClient';
import { AuthContext } from '../../App';

/**
 * Authentication page component.
 * Provides functionality for users to sign in using a magic link sent to their email.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const AuthPage = () => {
    const { setUser } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    /**
     * Handles sign-in with email by sending a magic link to the provided email address.
     * If an error occurs, it sets the error state; otherwise, it sets a success message.
     */
    const handleSignInWithEmail = async () => {
        console.log(import.meta.env.MODE)
        const redirectTo = import.meta.env.MODE === 'development'
            ? import.meta.env.VITE_DEV_REDIRECT_URL
            : import.meta.env.VITE_PROD_REDIRECT_URL;
        console.log(redirectTo)
        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                shouldCreateUser: true,
                emailRedirectTo: redirectTo
            },
        });
        if (error) {
            setError(error.message);
        } else {
            setMessage('Check your email for the login link!');
            setError(null);
        }
    };

// TODO: This useEffect is duplicated here and in App. Needs refactor. Maybe a ProtectedRoute comp for App.jsx
    useEffect(() => {
        /**
         * Checks the current session and updates the user state if a session exists.
         */
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setUser(session.user);
            }
        };

        checkSession();

        /**
         * Subscribes to authentication state changes and updates the user state.
         */
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        // TODO: This useEffect is duplicated here and in App. Needs refactor. Maybe a ProtectedRoute comp for App.jsx
        return () => {
            subscription?.unsubscribe();
        };
    }, [setUser]);

    return (
        <div 
            className='stack' 
            style={{ display: 'flex', flexDirection: 'column', margin: '10% auto 0', width: '280px' }}
        >
            <h2>Sign In</h2>
            <div>
                <label htmlFor="email">Email for magic link:</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
         
            <button 
                onClick={handleSignInWithEmail} 
                className='button solid' 
                style={{ margin: '10% auto 0', width: '150px' }}
            >
                Send Magic Link
            </button>
            {message && 
                <div>
                    <p>{message}</p>
                    <p>You can now close this tab</p>
                </div>
            }
            {error && <p>{error}</p>}
        </div>
    );
};

export default AuthPage;


