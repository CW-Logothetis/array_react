import React from 'react';
import './DeckOverview.scss';

function DeckOverview({ onDeckClick, decks }) {
    return (
        <div>
            {decks && decks.length > 0 ? (
                <table style={{ marginInline: 'auto', width: '100%', maxWidth: '50ch', tableLayout: 'auto' }}>
                    <thead>
                        <tr>
                            <th style={{ width: 'auto' }}>Deck</th>
                            <th style={{ width: '1%' }}>New</th>
                            <th style={{ width: '1%' }}>Learn</th>
                            <th style={{ width: '1%' }}>Due</th>
                        </tr>
                    </thead>
                    <tbody>
                        {decks.map(deck => (
                            <tr key={deck.id} onClick={() => onDeckClick(deck)} className="deck-name" style={{ cursor: 'pointer' }}>
                                <td>{deck.deck_name}</td>
                                <td>{deck.stats.new}</td>
                                <td>{deck.stats.learning}</td>
                                <td>{deck.stats.due}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No decks - please add one.</p>
            )}
        </div>
    );
}

export default DeckOverview;
