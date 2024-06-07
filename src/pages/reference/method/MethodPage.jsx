import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import OpenAI from 'openai';
import { styleHeadings } from '../../../utils/styleHeadings.js';
import './MethodPage.css';

function MethodPage({ methodType, methodGroups }) {

    // TODO: temp allow browser whilst testing locally. Need to add server.
    const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
    })

    const { method_name } = useParams();

    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let navigate = useNavigate();

    //TODO - future sidebar of all methods
    // const handleCardClick = (method) => {
    //     navigate(`/reference/${methodType}/${method.name}`);
    // };

    useEffect(() => {
        (async () => {
            const prompt = `
                You are an experienced teacher of JavaScript and a senior front end developer.
                You specialise in explaining JavaScript to beginners in layman terms, with real world examples.
                Create four paragraphs, with the headings for each section. 
                First, under the EXPLANATION heading, explain the ${methodType} method of "${method_name}()". 
                Then, under the SYNTAX heading, provide the syntax. 
                Next, under the EXAMPLES heading, give a simple example and a more difficult real-world example.
                Thanks very much.`;
            try {
                setLoading(true);
                setError(null);
                const response = await openai.chat.completions.create({
                    max_tokens: 1000,
                    temperature: 0.2,
                    messages: [
                        {
                            "role": "system",
                            "content": "You are teacher and educator, specialising in teaching beginners about modern JavaScript."
                        },
                        {
                            "role": "user",
                            "content": prompt
                        }
                    ],
                    model: 'gpt-4o'
                });
                setOutput(response.choices[0].message.content);
            } catch (err) {
                console.error('Error fetching completion:', err);
                setError('Failed to fetch data from OpenAI');
            }
            setLoading(false);
        })();
    }, [method_name]);

    return (
        <div>
            <div className="cont">
                {/* Future sidebar of all methods of this type */}
                <section className="method-menu">
                    {/* {methodGroups.map((category) => (
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
                    ))} */}
                </section>
                <section>
                    {loading && <p>Loading...</p>}
                    {!loading && error && <p>Error: {error}</p>}
                    {!loading && !error && output && (
                        <div style={{ textAlign: "left", fontSize: "var(--step-0)", maxWidth: "80ch", margin: "0 auto" }}
                            dangerouslySetInnerHTML={{ __html: styleHeadings(output) }} />
                    )}
                </section>
            </div>
        </div>
    );
}

export default MethodPage;
