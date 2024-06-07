import React from 'react';
import { useNavigate } from 'react-router-dom';
import { objectGroups } from '../../../lib/mvpStorage/objectGroups.js';
import './ObjectPage.css';

function ObjectPage() {
    let navigate = useNavigate();

    const handleCardClick = (method) => {
        navigate(`/reference/object/${method.name}`);
    };

    return (
        <div>
            <header>
                <div className="header__content">
                    <div className="header__text">
                        <h1>Object methods</h1>
                        <p>Summaries, syntax and example</p>
                    </div>
                </div>
            </header>

            <section className="groups">
                {objectGroups.map((category) => (
                    <div key={category.category} className="category">
                        <h2>{category.category}</h2>
                        <p>{category.description}</p>
                        <div className="cards">
                            {category.methods.map((method) => (
                                <div
                                    key={method.id}
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => handleCardClick(method)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            handleCardClick(method);
                                        }
                                    }}
                                    className="card flex-col"
                                >
                                    <h3>{method.method}</h3>
                                    <p>{method.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default ObjectPage;
