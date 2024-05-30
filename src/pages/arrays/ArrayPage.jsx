import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { arrayGroups } from '../../lib/mvpStorage/arrayGroups.js';
import { initializeArrayCards } from '../../lib/mvpStorage/localStorageCards.js';
import './ArrayPage.css';
import diagramArray from '../../assets/images/diagram_array.png';
import CardGroup from '../../lib/components/CardGroup';

function ArrayPage() {
    let navigate = useNavigate();

    useEffect(() => {
        //adds 37 array methods to local storage
        initializeArrayCards();
    }, []);

    const handleCardClick = (arrayMethod) => {
        navigate(`/arrays/${arrayMethod.id}`);
    };

    return (
        <div>
            <header>
                <div className="header__content">
                    <div className="header__text">
                        <h1>Array methods</h1>
                        <p>Summaries, syntax and example</p>
                    </div>
                    <img src={diagramArray} alt='diagram of an array' width="450" height="80" />
                </div>
            </header>

            <section className="groups">
                {arrayGroups.map((category) => (
                    <CardGroup
                        key={category.category}
                        title={category.category}
                        description={category.description}
                        items={category.methods}
                        onCardClick={handleCardClick}
                    />
                ))}
            </section>
        </div>
    );
}

export default ArrayPage;
