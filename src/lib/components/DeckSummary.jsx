import React from 'react';

function DeckSummary({stats}) {
    return (
        <div style={{ margin: 'auto', width: '50%' }}>
            <h2>Deck Summary</h2>
            <p>New: {stats.new}</p>
            <p>Learning: {stats.learning}</p>
            <p>To Review: {stats.toReview}</p>
        </div>
    );
}

export default DeckSummary;