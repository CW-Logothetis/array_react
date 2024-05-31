import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import DeckOverview from "../../lib/components/deckOverview/DeckOverview.jsx";
import DeckSummary from "../../lib/components/DeckSummary.jsx";
import { supabase } from '../../services/supabaseClient.js';
import './HomePage.css';

function HomePage() {
    const [showSummary, setShowSummary] = useState(false);
    const [stats, setStats] = useState({new: 0, learning: 0, toReview: 0, due: 0});
    const [userDecks, setUserDecks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchDecksAndFlashcards();
    }, []);

    const fetchDecksAndFlashcards = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser();

            const { data: decks, error: decksError } = await supabase
                .from('user_decks')
                .select('*, all_decks(deck_name)')
                .eq('user_id', user.id);

            if (decksError) throw decksError;

            setUserDecks(decks);

            const deckIds = decks.map(deck => deck.deck_id);
            const { data: flashcards, error: flashcardsError } = await supabase
                .from('user_flashcards')
                .select('*')
                .in('deck_id', deckIds); // `in()` requires an array of values to match against

            if (flashcardsError) throw flashcardsError;

            calculateStats(flashcards);
        } catch (err) {
            console.error('Unexpected error:', err);
        } finally {
            setIsLoading(false); // Set loading to false after fetch is complete
        }
    };

    const calculateStats = (flashcards) => {
        console.log(flashcards)
        const today = new Date().toISOString().split('T')[0];
        let newCount = 0;
        let learningCount = 0;
        let toReviewCount = 0;
        let dueCount = 0;

        flashcards.forEach(card => {
            if (!card.last_reviewed) {
                newCount++;
            } else {
                learningCount++;
                if (card.next_due.split('T')[0] <= today) {
                    dueCount++;
                    if (card.interval > 1) {
                        toReviewCount++;
                    }
                }
            }
        });

        setStats({ new: newCount, learning: learningCount, toReview: toReviewCount, due: dueCount });
        console.log(stats)
    };

    const handleDeckClick = () => {
        setShowSummary(true);
    }

    const handleAddDeckClick = () => {
        navigate('/decks');
    };

    return (
        <div className="l: stack mainContent mainContentWidth">
            {isLoading ? (
                <div>Loading...</div> 
            ) : showSummary ? (
                <div style={{ marginInline: 'auto', width: '70%' }}>
                    <DeckSummary stats={stats} />
                    <button className="c: button outline" style={{ marginBlockEnd: '1.5rem' }} onClick={() => setShowSummary(false)}>back to Decks</button>
                </div>
            ) : (
                <div>
                    <button className='button solid' onClick={handleAddDeckClick}>+ &nbsp; Add deck</button>
                    <DeckOverview onDeckClick={handleDeckClick} userDecks={userDecks} stats={stats} />
                </div>
            )}
        </div>
    );
}

export default HomePage;
