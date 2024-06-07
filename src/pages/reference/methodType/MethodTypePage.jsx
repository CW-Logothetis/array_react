import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './MethodTypePage.css';

const methodGroupsMap = {
    array: () => import('../../../lib/mvpStorage/arrayGroups.js'),
    number: () => import('../../../lib/mvpStorage/numberGroups.js'),
    object: () => import('../../../lib/mvpStorage/objectGroups.js'),
    string: () => import('../../../lib/mvpStorage/stringGroups.js'),
};

function MethodTypePage() {
    const { method_type } = useParams();
    const [methodGroups, setMethodGroups] = React.useState([]);
    let navigate = useNavigate();

    React.useEffect(() => {
        const loadMethodGroups = async () => {
            const module = await methodGroupsMap[method_type]();
            const groups = module[method_type + 'Groups'];
            setMethodGroups(groups);
        };
        loadMethodGroups();
    }, [method_type]);

    const handleCardClick = (method) => {
        navigate(`/reference/${method_type}/${method.name}`);
    };

    return (
        <div>
            <header>
                <div className="header__content">
                    <div className="header__text">
                        <h1>{method_type.charAt(0).toUpperCase() + method_type.slice(1)} methods</h1>
                        <p>Summaries, syntax and example</p>
                    </div>
                </div>
            </header>
            <section className="groups">
                {methodGroups.map((category) => (
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

export default MethodTypePage;
