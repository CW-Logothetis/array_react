import React, { useEffect, useState, useContext } from 'react';
import { supabase } from '../../services/supabaseClient';
import { AuthContext } from '../../App';

const AuthPage = () => {
    const { setUser } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleSignInWithEmail = async () => {
        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                shouldCreateUser: true,
                emailRedirectTo: 'http://localhost:5173'
            },
        });
        if (error) {
            setError(error.message);
        } else {
            setMessage('Check your email for the login link!');
            setError(null);
        }
    };

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setUser(session.user);
            }
        };

        checkSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            subscription?.unsubscribe();
        };
    }, [setUser]);

    return (
        <div>
            <h2>Sign In</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <button onClick={handleSignInWithEmail}>Send Magic Link</button>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default AuthPage;

