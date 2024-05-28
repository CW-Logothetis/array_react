import React, { useState, useEffect, createContext } from 'react';
import { supabase } from './services/supabaseClient';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './lib/components/layout/Layout.jsx';
import HomePage from './pages/home/HomePage.jsx';
import StudyFlashcard from './pages/studyFlashcard/StudyFlashcard.jsx';
import ArrayPage from './pages/arrays/ArrayPage.jsx';
import ArrayMethodPage from './pages/method/ArrayMethodPage.jsx';
import NotFound from "./pages/error/NotFound.jsx";
import AuthPage from './lib/components/Auth.jsx';

export const AuthContext = createContext();

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            console.log(session)
            setUser(session?.user ?? null);
            setLoading(false);
            console.log('User after getSession:', session?.user);
        };

        getSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            console.log(session)
            setUser(session?.user ?? null);
            setLoading(false);

            console.log('User after onAuthStateChange:', session);
        });

        return () => {
            subscription?.unsubscribe();
        };
    }, []);

    if (loading) {

        return <div>Loading...</div>; // Or a more sophisticated loading indicator

    }

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={user ? <HomePage /> : <Navigate to="/auth" />} />
                    <Route path="/study" element={user ? <StudyFlashcard /> : <Navigate to="/auth" />} />
                    <Route path="/arrays" element={user ? <ArrayPage /> : <Navigate to="/auth" />} />
                    <Route path="/arrays/:array_method" element={user ? <ArrayMethodPage /> : <Navigate to="/auth" />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/auth" element={<AuthPage />} />
            </Routes>
        </AuthContext.Provider>
    );
}

export default App;
