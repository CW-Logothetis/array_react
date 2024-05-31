import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient.js';
import Card from '../../lib/components/card/Card';

function Decks() {
    const [allDecks, setAllDecks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDecks = async () => {
            try {
                const { data, error } = await supabase
                    .from('all_decks')
                    .select('*');
                if (error) {
                    console.error('supabase error fetching decks', error);
                } else {
                    setAllDecks(data);
                }
            } catch (err) {
                console.error('Unexpected error:', err);
            }
        }
        fetchDecks();
    }, []);

    const handleCardClick = async (deck) => {
        try {
          // Get the current user's session
          const { data: { user } } = await supabase.auth.getUser();
          // Add entry to user_decks table
          const { data: userDeck, error: userDeckError } = await supabase
            .from('user_decks')
            .insert({ user_id: user.id, deck_id: deck.id })
            .single();
      
          if (userDeckError) throw userDeckError;
      
          // Navigate back to HomePage
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
