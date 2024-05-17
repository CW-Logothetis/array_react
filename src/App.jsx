import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './lib/components/layout/Layout.jsx'
import HomePage from './pages/home/HomePage.jsx';
import StudyFlashcard from './pages/studyFlashcard/StudyFlashcard.jsx';
import ArrayPage from './pages/arrays/ArrayPage.jsx';
import ArrayMethodPage from './pages/method/ArrayMethodPage.jsx';
import NotFound from "./pages/error/NotFound.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/study" element={<StudyFlashcard/>}/>
                <Route path="/arrays" element={<ArrayPage/>}/>
                <Route path="/arrays/:array_method" element={<ArrayMethodPage/>}/>

                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
}

export default App;