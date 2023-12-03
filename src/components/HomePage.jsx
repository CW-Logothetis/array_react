import React from 'react';
import { useNavigate } from 'react-router-dom';
import { arrayMethods } from '../lib/arrayMethods'; // Adjust path as needed

function HomePage() {
    let navigate = useNavigate();

    return (
        <>
            <section className="header">
                {/* ... header content ... */}
            </section>

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