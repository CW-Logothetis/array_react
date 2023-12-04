import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './components/HomePage'; // We'll create this component next
import './App.css'; // Assumed the CSS file is at src/app.css
// Import other pages/components as needed

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Define other routes here */}
            </Routes>
        </Layout>
    );
}

export default App;