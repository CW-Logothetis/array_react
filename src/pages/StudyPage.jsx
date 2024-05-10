import React, {useEffect, useState} from 'react';
import OpenAI from "openai";
import { useLocation } from 'react-router-dom';
import {styleHeadings} from "../utils/styleHeadings.js";
import {updateCard} from "../lib/localStorageCards.js";
import './StudyPage.css';

function StudyPage() {
    const location = useLocation();
    const currentCard = location.state?.card;
    console.log({currentCard})

    if (!currentCard) {
        return <div>Please select a card to study.</div>;
    }

    // TODO: temp allow browser whilst testing locally. Remove when deploy to Vercel.
    const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
    })

    const array_method = currentCard.name;
    const cardId = currentCard.id;

    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleScore = (cardId, score) => {
        updateCard(cardId, score);
    };

    // Decided to use async/await try/catch rather than Promises with  .then .catch
    // Therefore, IIFE used to execute async function immediately.
    // Allows async/await syntax while keeping the effect clean, since `useEffect` doesn't support returning a Promise
    // (i.e., it can’t be an async function directly - it needs the async on 24 and the () on 53 to call it).
    useEffect(() => {
        (async () => {
            const prompt = `
                You are an experienced teacher of JavaScript and a senior front end developer.
                You specialise in explaining JavaScript to beginners in layman terms, with real world examples.
                Create four paragraphs, with the headings for each section. 
                First, under the EXPLANATION heading, explain "array.Prototype.${array_method}()". 
                Then, under the SYNTAX heading, provide the syntax. 
                Next, under the EXAMPLES heading, give a simple example and a more difficult real-world example.
                Finally, under the EXERCISES heading, write two exercises to test the reader's understanding. 
                The first exercise should be easy. The second challenge should be challenging and be used in real-world apps like email, to do lists or streaming apps. 
                Just provide the question.
                Thanks very much.`;
            try {
                setLoading(true);
                setError(null); // Reset error state
                const response = await openai.chat.completions.create({
                    max_tokens: 500,
                    temperature: 0.7, // Controls the randomness of the output
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
                    model: 'gpt-3.5-turbo-1106'
                });
                console.log(response.choices[0].message.content);
                setOutput(response.choices[0].message.content);
            } catch (err) {
                console.error('Error fetching completion:', err);
                setError('Failed to fetch data from OpenAI');
            }
            setLoading(false);  // Set loading to false regardless of success or error
        })();
    }, [array_method]);

    // TODO: going to trust OpenAI to be serving safe HTML, but could add DOMPurify
    return (
        <div>
            <div className="cont">
                <div></div>
                <section>
                    {loading && <p>Loading...</p>}
                    {!loading && error && <p>Error: {error}</p>}
                    {!loading && !error && output && (
                        <div style={{textAlign: "left", fontSize: "var(--step-0)", maxWidth: "80ch", margin: "0 auto"}}
                             dangerouslySetInnerHTML={{__html: styleHeadings(output)}}/>
                    )}
                    <div>
                        <button onClick={() => handleScore(cardId, 'Again')}>Again</button>
                        <button onClick={() => handleScore(cardId, 'Hard')}>Hard</button>
                        <button onClick={() => handleScore(cardId, 'Good')}>Good</button>
                        <button onClick={() => handleScore(cardId, 'Easy')}>Easy</button>
                    </div>
                </section>
                <div></div>
            </div>
        </div>
    );
}

export default StudyPage;