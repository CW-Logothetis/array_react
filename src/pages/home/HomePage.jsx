import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import DeckOverview from "../../lib/components/deckOverview/DeckOverview.jsx";
import DeckSummary from "../../lib/components/DeckSummary.jsx";
import { supabase } from '../../services/supabaseClient.js';
import './HomePage.css';

function HomePage() {
    const [showSummary, setShowSummary] = useState(false);
    const [stats, setStats] = useState({new: 0, learning: 0, toReview: 0});
    const [userDecks, setUserDecks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        calculateStats();
        fetchDecks();
    }, []);

    const fetchDecks = async () => {
        try {
              // Get the current user's session
            const { data: { user } } = await supabase.auth.getUser();

            const { data, error } = await supabase
                .from('user_decks')
                // select all cols from user_decks, plus deck_name col from all_decks
                .select('*, all_decks(deck_name)') 
                // `eq` (equals operator) matches two args, so only includes decks that belong to user
                .eq('user_id', user.id);
            if (error) {
                console.error('supabase error fetching decks', error);
            } else {
                setUserDecks(data);
            }
        } catch (err) {
            console.error('Unexpected error:', err);
        }
    };

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

    const handleAddDeckClick = () => {
        navigate('/decks');
    };

    return (
        <div className="l: stack mainContent mainContentWidth">
            {showSummary ? (
                <div style={{marginInline: 'auto', width: '70%'}}>
                    <DeckSummary stats={stats}/>
                    <button className="c: button outline" style={{marginBlockEnd: '1.5rem'}} onClick={() => setShowSummary(false)}>back to Decks</button>
                </div>
            ) : (
                <div>
                    <button className='button solid' onClick={handleAddDeckClick}>+ &nbsp; Add deck</button>
                    <DeckOverview onDeckClick={handleDeckClick} userDecks={userDecks} stats={stats}/>
                </div>
            )}
        </div>
    );
}

export default HomePage;