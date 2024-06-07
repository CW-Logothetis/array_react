import React from "react";
import { useNavigate } from 'react-router-dom';

function ReferencePage() {

    let navigate = useNavigate();

    const handleCardClick = (page) => {
        navigate(`/reference/${page}`);
    };

    return(
        <div style={{ margin: 'auto', width: '50%' }}>
            <ul className="cards" style={{color: 'gray', fontWeight: '500', fontSize: '1.5rem'}}>
                <li className="card" onClick={() => handleCardClick('object')}>Object</li>
                <li className="card" onClick={() => handleCardClick('array')}>Array</li>
                <li className="card" onClick={() => handleCardClick('string')}>String</li>
            </ul>
        </div>
    )
}

export default ReferencePage;