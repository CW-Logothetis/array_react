import React from 'react';
import './Card.scss';

function Card({ item, onCardClick }) {
    return (
        <div
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => onCardClick(item)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onCardClick(item);
                }
            }}
            className="card flex-col"
        >
            <h3>{item.method}</h3>
            <p>{item.description}</p>
        </div>
    );
}

export default Card;