import React from 'react';
import { useNavigate } from 'react-router-dom';
import { arrayMethods } from '../lib/arrayMethods';
import './HomePage.css';
import diagramArray from '../assets/diagram_array.png';

function HomePage() {
    let navigate = useNavigate();

    return (
        <>
            <header>
                <div className="header__content">
                    <div className="header__text">
                        <h1>Array methods</h1>
                        <p>Summaries, syntax and example</p>
                    </div>
                    <img src={diagramArray} alt='diagram of an array'/>
                </div>
            </header>

            <section className="cards">
                {arrayMethods.map((arrayMethod) => (
                    <div
                        key={arrayMethod.id}
                        onClick={() => navigate('/arrays/' + arrayMethod.id)}
                        className="card flex-col"
                    >
                        <h2>{arrayMethod.method}</h2>
                        <p>{arrayMethod.description}</p>
                    </div>
                ))}
            </section>
        </>
    );
}

export default HomePage;