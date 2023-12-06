import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './components/HomePage';
import ArrayMethodPage from './components/ArrayMethodPage';
import './App.css';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/arrays/:array_method" element={<ArrayMethodPage />} />
            </Routes>
        </Layout>
    );
}

export default App;