import React from 'react';
import './CardGroup.scss';
import Card from '../card/Card';

function CardGroup({ title, description, items, onCardClick }) {
    return (
        <div className="category">
            <h2>{title}</h2>
            <p className='category__p'>{description}</p>
            <div className="cards">
                {items && items.length > 0 ? (
                    items.map((item) => (
                        <Card key={item.id} item={item} onCardClick={onCardClick} />
                    ))
                ) : (
                    <p>No items available</p>
                )}
            </div>
        </div>
    );
}

export default CardGroup;
