import React, { useState, useEffect, createContext } from 'react';
import { supabase } from './services/supabaseClient';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './lib/components/layout/Layout.jsx';
import HomePage from './pages/home/HomePage.jsx';
import StudyFlashcard from './pages/studyFlashcard/StudyFlashcard.jsx';
import ReferencePage from './pages/reference/ReferencePage.jsx'
import ArrayPage from './pages/reference/array/ArrayPage.jsx';
import ArrayMethodPage from './pages/reference/array-method/ArrayMethodPage.jsx';
import NotFound from "./pages/error/NotFound.jsx";
import AuthPage from './lib/components/Auth.jsx';

/**
 * Context to provide authentication state and user information.
 * @type {React.Context<{user: object, setUser: React.Dispatch<React.SetStateAction<object>>}>}
 */
export const AuthContext = createContext();

/**
 * Main application component.
 * Manages user authentication state and routes.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 */
function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        /**
         *  Fetches current session when the component mounts, and sets the user state.
         */
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);
            setLoading(false);
        };

        getSession();

        /**
         * Subscribes to authentication state changes. 
         * When an auth event occurs (sign in,out,expire, token refresh), it updates the user state and stops the loading state.
         */
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });

         /**
          * ensures the subscription to listener is unsubscribed when the component unmounts 
          * to prevent memory leaks 
          */
         return () => {
            subscription?.unsubscribe();
        };
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={user ? <HomePage /> : <Navigate to="/auth" />} />
                    <Route path="study" element={user ? <StudyFlashcard /> : <Navigate to="/auth" />} />
                    <Route path="/reference" element={user ? <ReferencePage /> : <Navigate to="/auth" />} />
                    <Route path="/reference/array" element={user ? <ArrayPage /> : <Navigate to="/auth" />} />
                    <Route path="/reference/array/:array_method" element={user ? <ArrayMethodPage /> : <Navigate to="/auth" />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/auth" element={<AuthPage />} />
            </Routes>
        </AuthContext.Provider>
    );
}

export default App;
