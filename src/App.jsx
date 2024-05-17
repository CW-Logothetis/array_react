import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './lib/components/Layout.jsx'
import HomePage from './pages/HomePage.jsx';
import StudyPage from './pages/StudyPage.jsx';
import ArrayPage from './pages/ArrayPage.jsx';
import ArrayMethodPage from './pages/ArrayMethodPage';
import NotFound from "./pages/NotFound.jsx";
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/study" element={<StudyPage/>}/>
                <Route path="/arrays" element={<ArrayPage/>}/>
                <Route path="/arrays/:array_method" element={<ArrayMethodPage/>}/>

                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
}

export default App;