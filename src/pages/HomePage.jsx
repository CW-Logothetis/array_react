import React, {useEffect, useState} from 'react';
import {initializeArrayCards, getDueCards, updateCard} from '../lib/localStorageCards.js';
import './HomePage.css';
import DeckOverview from "../lib/components/DeckOverview.jsx";
import DeckSummary from "../lib/components/DeckSummary.jsx";

function HomePage() {
    // const [dueCards, setDueCards] = useState([]);
    //
    // useEffect(() => {
    //     initializeArrayCards();
    //     refreshDueCards();
    // }, []);
    //
    // const refreshDueCards = () => {
    //     setDueCards(getDueCards());
    // };
    //
    // const handleScore = (cardId, score) => {
    //     updateCard(cardId, score);
    //     refreshDueCards();
    // };

    // return (
    //     <div>
    //         <h1>Due Cards</h1>
    //         <ul>
    //             {dueCards.map(card => (
    //                 <li key={card.id}>
    //                     {card.name}
    //                     <button onClick={() => handleScore(card.id, 'Again')}>Again</button>
    //                     <button onClick={() => handleScore(card.id, 'Hard')}>Hard</button>
    //                     <button onClick={() => handleScore(card.id, 'Good')}>Good</button>
    //                     <button onClick={() => handleScore(card.id, 'Easy')}>Easy</button>
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );

    const [showSummary, setShowSummary] = useState(false);
    const [stats, setStats] = useState({new: 0, learning: 0, toReview: 0});

    useEffect(() => {
        calculateStats();
    }, []);

    const calculateStats = () => {
        const cards = JSON.parse(localStorage.getItem('cards') || '[]');
        const today = new Date().toISOString().split('T')[0];
        let newCount = 0;
        let learningCount = 0;
        let dueCount = 0;
        let toReviewCount = 0;

        cards.forEach(card => {
            if (!card.lastReviewed) {
                newCount++;
            } else {
                // If the card has been reviewed before, increment the count of cards in the learning phase
                learningCount++;

                // Check if the card is due for review today
                if (card.nextDue.split('T')[0] <= today) {
                    dueCount++;

                    // Check if the card is past the initial learning phase (set as interval > 1)
                    if (card.interval > 1) {
                        toReviewCount++;
                    }
                }
            }
        });

        setStats({new: newCount, learning: learningCount, due: dueCount, toReview: toReviewCount});
    };
    const handleDeckClick = () => {
        setShowSummary(true);
    }

    return (
        <div>
            {showSummary ? (
                <div>
                    <button onClick={() => setShowSummary(false)}>back to Decks</button>
                    <DeckSummary stats={stats}/>
                </div>
            ) : (

                <DeckOverview onDeckClick={handleDeckClick} stats={stats}/>

            )}
        </div>
    );

}

export default HomePage;