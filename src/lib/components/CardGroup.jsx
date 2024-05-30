import React from 'react';

function CardGroup({ title, description, items, onCardClick }) {
    return (
        <div className="category">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="cards">
                {items.map((item) => (
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
                ))}
            </div>
        </div>
    );
}

export default CardGroup;