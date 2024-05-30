import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabaseClient.js';
import Card from '../../lib/components/card/Card';

function handleCardClick(method) {
    console.log('method clicked', method);
}

function Decks() {
    const [decks, setDecks] = useState([]);

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

    return (
        <div className="l: mainContent">
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
                                onCardClick={handleCardClick}
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
