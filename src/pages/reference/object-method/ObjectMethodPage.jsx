import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import OpenAI from 'openai';
import {styleHeadings} from '../../../utils/styleHeadings.js';
import {arrayMethods} from "../../../lib/mvpStorage/arrayMethods.js";
import {NavLink} from 'react-router-dom';
import './ObjectMethodPage.css';

// /**
//  * Splits an array into three separate arrays based on the starting letter.
//  * Methods that start with A-M, N-Z, and misc (non A-Z) are put into separate arrays.
//  *
//  * @param {Object[]} arr - Array of method objects with an 'id' field.
//  * @returns {Object} An object with three arrays categorizing the list of methods.
//  */
// function splitArrayByAlphabet(arr) {

//     let arrayAtoM = [];
//     let arrayNtoZ = [];
//     let arrayMisc = []

//     arr.forEach(obj => {
//         const firstLetter = obj.id.charAt(0).toUpperCase();
//         if (firstLetter >= 'A' && firstLetter <= 'M') {
//             arrayAtoM.push(obj);
//         } else if (firstLetter >= 'N' && firstLetter <= 'Z') {
//             arrayNtoZ.push(obj);
//         }
//         // first letter should always be A-Z, but just in case, put in last column
//         else arrayMisc.push(obj);
//     });

//     return { arrayAtoM, arrayNtoZ, arrayMisc };
// }

// const { arrayAtoM, arrayNtoZ, arrayMisc } = splitArrayByAlphabet(arrayMethods);

// /**
//  * Renders a list of array methods as navigation links.
//  *
//  * @param {Object[]} array - Array of method objects.
//  * @returns {React.ReactNode} The component's rendered output as a list.
//  */
// const renderList = (array) => (
//     <ul>
//         {array.map(method => (
//             <li key={method.id}>
//                 <NavLink to={`/reference/array/${method.id}`} className="button text-only">
//                     {method.method}
//                 </NavLink>
//             </li>
//         ))}
//     </ul>
// );


/**
 * The main component for displaying a page with array methods and content from OpenAI.
 *
 * @returns {React.ReactNode} The component's rendered output.
 */
function ObjectMethodPage() {

    // TODO: temp allow browser whilst testing locally. Need to add server.
    const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
    })

    const {object_method} = useParams();

    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                First, under the EXPLANATION heading, explain the object method of "${object_method}()". 
                Then, under the SYNTAX heading, provide the syntax. 
                Next, under the EXAMPLES heading, give a simple example and a more difficult real-world example.
                Thanks very much.`;
            try {
                setLoading(true);
                setError(null); // Reset error state
                const response = await openai.chat.completions.create({
                    max_tokens: 1000,
                    temperature: 0.2, // Controls the randomness of the output
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
                console.log(response.choices[0].message.content);
                setOutput(response.choices[0].message.content);
            } catch (err) {
                console.error('Error fetching completion:', err);
                setError('Failed to fetch data from OpenAI');
            }
            setLoading(false);  // Set loading to false regardless of success or error
        })();
    }, [object_method]);

    // TODO: going to trust OpenAI to be serving safe HTML, but could add DOMPurify
    return (
        <div>
            <div className="cont">
                <section className="method-menu">
                    {/* {renderList(arrayAtoM)}
                    {renderList(arrayNtoZ)}
                    {renderList(arrayMisc)} */}
                </section>
                <section>
                    {loading && <p>Loading...</p>}
                    {!loading && error && <p>Error: {error}</p>}
                    {!loading && !error && output && (
                        <div style={{textAlign: "left", fontSize: "var(--step-0)", maxWidth: "80ch", margin: "0 auto"}}
                             dangerouslySetInnerHTML={{__html: styleHeadings(output)}}/>
                    )}
                </section>
            </div>
        </div>
    );
}

export default ObjectMethodPage;