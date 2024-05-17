import React from 'react';
import './DeckOverview.scss';

function DeckOverview({ onDeckClick, stats }) {
    return (
        <div>
            <table style={{ margin: 'auto', width: '70%', tableLayout: 'auto' }}>
                <thead>
                <tr>
                    <th style={{ width: 'auto' }}>Deck</th>
                    <th style={{ width: '1%' }}>New</th>
                    <th style={{ width: '1%' }}>Learn</th>
                    <th style={{ width: '1%' }}>Due</th>
                </tr>
                </thead>
                <tbody>
                <tr onClick={onDeckClick} className="e: deck-name" style={{cursor: 'pointer'}}>
                    <td>Array</td>
                    <td>{stats.new}</td>
                    <td>{stats.learning}</td>
                    <td>{stats.due}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DeckOverview;