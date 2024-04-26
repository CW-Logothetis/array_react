import React from 'react';
import { useNavigate } from 'react-router-dom';
import { arrayMethods } from '../lib/arrayMethods';
import './HomePage.css';
import diagramArray from '../assets/diagram_array.png';

function HomePage() {
    let navigate = useNavigate();

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

            <section className="cards">
                {arrayMethods.map((arrayMethod) => (
                    <div
                        key={arrayMethod.id}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleCardClick(arrayMethod)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                handleCardClick(arrayMethod);
                            }
                        }}
                        className="card flex-col"
                    >
                        <h2>{arrayMethod.method}</h2>
                        <p>{arrayMethod.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default HomePage;