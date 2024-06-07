import React from 'react';
import { useNavigate } from 'react-router-dom';
import { arrayGroups } from '../../../lib/mvpStorage/arrayGroups.js';
import './ArrayPage.css';
import diagramArray from '../../../assets/images/diagram_array.png';

function ArrayPage() {
    let navigate = useNavigate();

    const handleCardClick = (arrayMethod) => {
        navigate(`/reference/array/${arrayMethod.name}`);
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
                    <div key={category.category} className="category">
                        <h2>{category.category}</h2>
                        <p>{category.description}</p>
                        <div className="cards">
                            {category.methods.map((arrayMethod) => (
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
                                    <h3>{arrayMethod.method}</h3>
                                    <p>{arrayMethod.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default ArrayPage;
