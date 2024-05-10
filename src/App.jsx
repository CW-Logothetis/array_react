import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import StudyPage from './pages/StudyPage.jsx';
import ArrayPage from './pages/ArrayPage.jsx';
import ArrayMethodPage from './pages/ArrayMethodPage';
import './App.css';

function App() {
    return (
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/study" element={<StudyPage/>}/>
                <Route path="/arrays" element={<ArrayPage/>}/>
                <Route path="/arrays/:array_method" element={<ArrayMethodPage/>}/>
            </Routes>
    );
}

export default App;