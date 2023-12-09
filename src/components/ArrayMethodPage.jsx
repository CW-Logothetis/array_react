import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import OpenAI from 'openai';
import {styleHeadings} from '../utils/styleHeadings';
import {arrayMethods} from "../lib/arrayMethods.js";
import {NavLink} from 'react-router-dom';
import './ArrayMethodPage.css';

function ArrayMethodPage() {

    // TODO: temp allow browser whilst testing locally. Remove when deploy to Vercel.
    const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
    })
    const {array_method} = useParams();
    console.log(array_method)

    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function splitArrayByAlphabet(arr) {

        let arrayAtoM = [];
        let arrayNtoZ = [];
        let arrayMisc = []

        arr.forEach(obj => {
            const firstLetter = obj.id.charAt(0).toUpperCase();
            if (firstLetter >= 'A' && firstLetter <= 'M') {
                arrayAtoM.push(obj);
            } else if (firstLetter >= 'N' && firstLetter <= 'Z') {
                arrayNtoZ.push(obj);
            }
            // first letter should always be A-Z, but just in case, put in last column
            else arrayMisc.push(obj);
        });

        return { arrayAtoM, arrayNtoZ, arrayMisc };
    }

    const { arrayAtoM, arrayNtoZ, arrayMisc } = splitArrayByAlphabet(arrayMethods);

    const renderList = (array) => (
        <ul>
            {array.map(method => (
                <li key={method.id}>
                    <NavLink to={`/arrays/${method.id}`} className="">
                        {method.method}
                    </NavLink>
                </li>
            ))}
        </ul>
    );

    // Decided to use async/await try/catch rather than Promises with .then .catch
    // Therefore, IIFE used to execute async function immediately.
    // Allows async/await syntax while keeping the effect clean, since `useEffect` doesn't support returning a Promise
    // (i.e., it can’t be an async function directly - it needs the async on 24 and the () on 53 to call it).
    useEffect(() => {
        (async () => {
            const prompt = `
                Create three paragraphs, with the headings for each section. 
                First, under the EXPLANATION heading, explain "array.Prototype.${array_method}()". 
                Then, under the SYNTAX heading, provide the syntax. Finally, under the EXAMPLES heading, give two examples.
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
        <>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                </nav>
            </header>
            <div className="cont">
                <section className="method-menu">
                    {renderList(arrayAtoM)}
                    {renderList(arrayNtoZ)}
                </section>
                <section>
                    {loading && <p>Loading...</p>}
                    {!loading && error && <p>Error: {error}</p>}
                    {!loading && !error && output && (
                        <div style={{textAlign: "left", fontSize: "var(--step-0)"}}
                             dangerouslySetInnerHTML={{__html: styleHeadings(output)}}/>
                    )}
                </section>
            </div>
        </>
    );
}

export default ArrayMethodPage;