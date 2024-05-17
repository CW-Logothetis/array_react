import React, {useEffect, useState} from 'react';
import OpenAI from "openai";
import {useLocation} from 'react-router-dom';
import {getNextCard, updateCard} from "../../lib/mvpStorage/localStorageCards.js";
import './StudyFlashcard.css';

function StudyFlashcard() {
    const location = useLocation();
    const [currentCard, setCurrentCard] = useState(location.state?.card);
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

    const [exercises, setExercises] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAnswers, setShowAnswers] = useState(false);

    const handleSubmit = () => {
        setShowAnswers(true);
    };

    const handleScore = async (cardId, score) => {
        await updateCard(cardId, score); // TODO does updateCard need to be an async function?
        const nextCard = getNextCard();
        setCurrentCard(nextCard);
        setShowAnswers(false);
        setExercises(null);
    };

    const Exercise = ({loading, error, question, labelId, labelText, showAnswers, answer}) => (

            <div className="stack">
                <h3>{labelText}</h3>
                {loading && <p>Loading exercises...</p>}
                {!loading && error && <p>Error: {error}</p>}
                {!loading && !error && question && (
                    <div className="stack">
                        <p>{question}</p>

                        <div className="exercise-container stack">
                            <div style={{display: 'flex', flexDirection: 'column'}} className="stack">
                                <label htmlFor={labelId}>Your code:</label>
                                <textarea id={labelId} name={labelId} rows="4" cols="50"
                                          aria-label={`Enter your answer to the ${labelText.toLowerCase()} exercise here`}/>
                            </div>
                                {showAnswers && (
                                    <div className="exercise-answer">
                                        <h3>Answer</h3>
                                        <pre>{answer}</pre>
                                    </div>
                                )}
                        </div>

                    </div>
                )}
            </div>
    );

    // Decided to use async/await try/catch rather than Promises with  .then .catch
    // Therefore, IIFE used to execute async function immediately.
    // Allows async/await syntax while keeping the effect clean, since `useEffect` doesn't support returning a Promise
    // (i.e., it can’t be an async function directly - it needs the async on 24 and the () on 53 to call it).
    useEffect(() => {
        (async () => {
            const prompt = `
                You are an experienced teacher of JavaScript and a senior front end developer.
                You specialize in explaining JavaScript to beginners in layman terms, with real-world examples.
                Please create a JSON object with the following structure:
                {
                    "explanation": "Provide a succinct but sufficient explanation of array.Prototype.${array_method}().",
                    "syntax": "Provide the syntax for array.Prototype.${array_method}(), detailing any parameters in the method's API.",
                    "simple_exercise": {
                        "exercise": "Provide a simple question to test basic understanding of array.Prototype.${array_method}().",
                        "explanation": "Provide the answer to the simple exercise as a JavaScript function, with a console.log to output the result, and explain how and why you did it. Wrap any code in HTML pre or code tags where relevant."
                    },
                    "challenging_exercise": {
                        "exercise": "Provide a challenging question suitable for real-world applications like email systems, to-do lists, or streaming apps.",
                        "explanation": "Provide the answer to the advanced exercise as a JavaScript function, with a console.log to output the result, and explain how and why you did it. Wrap any code in HTML pre or code tags where relevant."
                    }
                }
                Please wrap any code that you return in HTML pre or code tags.
                Return this JSON object. Thank you.`;
            try {
                setLoading(true);
                setError(null); // Reset error state
                const response = await openai.chat.completions.create({
                    max_tokens: 700,
                    temperature: 0.1,
                    response_format: {type: "json_object"},
                    messages: [
                        {
                            "role": "system",
                            "content": "You are a teacher and educator, specializing in teaching beginners about modern JavaScript. Please return responses in JSON format."
                        },
                        {
                            "role": "user",
                            "content": prompt
                        }
                    ],
                    model: 'gpt-3.5-turbo-1106'
                });
                console.log(response.choices[0].message.content);
                const exercises = JSON.parse(response.choices[0].message.content);
                setExercises(exercises); // Store the exercises in state
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
            <div className="cont stack">
                <div></div>

                <section className="stack">
                    <h1>{array_method}()</h1>
                    <div className="underline"></div>

                    <h3>Explanation</h3>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label id="explanation-desc" htmlFor="explanation">Try write an explanation and/or pseudocode.</label>
                        <textarea id="explanation" name="explanation" rows="4" cols="50"
                                  aria-describedby="explanation-desc"></textarea>
                    </div>

                    {showAnswers && (
                        <div className="exercise-answer">
                            <h3>Answer</h3>
                            <p>{exercises.explanation}</p>
                            <h4>Syntax</h4>
                            <pre>{exercises.syntax}</pre>
                        </div>
                    )}


                    <div className="underline"></div>

                    <h2>Exercises</h2>

                        <Exercise
                            loading={loading}
                            error={error}
                            question={exercises && exercises.simple_exercise.exercise}
                            fakeData={exercises && exercises.simple_exercise.fake_data}
                            labelId="simple"
                            labelText="Simple Exercise"
                            showAnswers={showAnswers}
                            answer={exercises && exercises.simple_exercise.explanation}
                        />
                        <Exercise
                            loading={loading}
                            error={error}
                            question={exercises && exercises.challenging_exercise.exercise}
                            fakeData={exercises && exercises.challenging_exercise.fake_data}
                            labelId="challenging"
                            labelText="Challenging Exercise"
                            showAnswers={showAnswers}
                            answer={exercises && exercises.challenging_exercise.explanation}
                            consoleLog={exercises && exercises.challenging_exercise.console}
                        />

                    <div className="underline"></div>
                    <div>
                        {!showAnswers && (<button onClick={handleSubmit}>Show Answers</button>)}
                        {showAnswers && (
                            <div>
                                <button onClick={() => handleScore(cardId, 'Again')}>Again</button>
                                <button onClick={() => handleScore(cardId, 'Hard')}>Hard</button>
                                <button onClick={() => handleScore(cardId, 'Good')}>Good</button>
                                <button onClick={() => handleScore(cardId, 'Easy')}>Easy</button>
                            </div>
                        )}
                    </div>
                </section>
                <div></div>
            </div>
        </div>
    );
}

export default StudyFlashcard;