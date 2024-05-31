import React from 'react';
import './DeckOverview.scss';



function DeckOverview({ onDeckClick, stats, userDecks }) {
    return (
        <div>
            {userDecks && userDecks.length > 0 ? (
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
                        {userDecks.map(userDeck => (
                            <tr key={userDeck.deck_id} onClick={() => onDeckClick(userDeck)} className="deck-name" style={{ cursor: 'pointer' }}>
                                <td>{userDeck.all_decks.deck_name}</td>
                                <td>{stats.new}</td>
                                <td>{stats.learning}</td>
                                <td>{stats.due}</td>
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
