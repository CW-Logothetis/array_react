import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient.js';
import Card from '../../lib/components/card/Card';

function Decks() {
    const [decks, setDecks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDecks = async () => {
            try {
                const { data, error } = await supabase
                    .from('decks')
                    .select('*');
                if (error) {
                    console.error('supabase error fetching decks', error);
                } else {
                    setDecks(data);
                }
            } catch (err) {
                console.error('Unexpected error:', err);
            }
        }
        fetchDecks();
    }, []);

    const handleCardClick = async (deck) => {
        try {
            // 1. Add entry to user_decks table
            const { data: userDeck, error: userDeckError } = await supabase
                .from('user_decks')
                .insert([{ deck_id: deck.id }])
                .single();
            if (userDeckError) throw userDeckError;

            // 2. Fetch cards for the deck
            const { data: cards, error: cardsError } = await supabase
                .from('cards')
                .select('*')
                .eq('deck_id', deck.id);
            if (cardsError) throw cardsError;

            // 3. Add cards to user_cards table
            const userCards = cards.map(card => ({
                card_id: card.id,
                user_deck_id: userDeck.id,
                lastReviewed: null,
                nextDue: new Date().toISOString(),
                interval: 1,
                easeFactor: 2.5
            }));
            const { error: userCardsError } = await supabase
                .from('user_cards')
                .insert(userCards);
            if (userCardsError) throw userCardsError;

            // 4. Navigate back to HomePage
            navigate('/');
        } catch (error) {
            console.error('Error handling card click:', error);
        }
    };

    return (
        <div className='mainContent mainContentWidth'>
            <h1>Decks</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {decks && decks.length > 0 ? (
                    decks.map(deck => (
                        <div key={deck.id} className="cards">
                            <Card
                                key={deck.id}
                                item={{
                                    method: deck.deck_name,
                                    description: deck.deck_description
                                }}
                                onCardClick={() => handleCardClick(deck)}
                            />
                        </div>
                    ))
                ) : (
                    <p>Loading decks...</p>
                )}
            </div>
        </div>
    );
}

export default Decks;
