import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {getCardsForStudySession} from "../localStorageCards.js";

function DeckSummary({ stats }) {
    let navigate = useNavigate();
    const [sessionCards, setSessionCards] = useState([]);

    useEffect(() => {
        const cards = getCardsForStudySession();
        setSessionCards(cards);
    }, []);

    const handleStudyClick = () => {
        if (sessionCards.length > 0) {
            navigate(`/study`, { state: { card: sessionCards[0] } });
        } else {
            alert("No cards available to study.");
        }
    };

    return (
        <div style={{ margin: 'auto', width: '50%' }}>
            <h2>Deck Summary</h2>
            <p>New: {stats.new}</p>
            <p>Learning: {stats.learning}</p>
            <p>To Review: {stats.toReview}</p>
            <button onClick={handleStudyClick}>Study</button>
        </div>
    );
}

export default DeckSummary;