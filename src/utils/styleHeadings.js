export function styleHeadings(output) {
    let newOutput
    const explanationOutput = output.replace("EXPLANATION", "<div style='margin-bottom: 0.5rem; font-weight: 600'>EXPLANATION</div>");
    const syntaxOutput = explanationOutput.replace("SYNTAX", "<div style='margin: 20px 0 0.5rem; font-weight: 600'>SYNTAX</div>")
    newOutput = syntaxOutput.replace("EXAMPLES", "<div style='margin: 20px 0 0.5rem; font-weight: 600'>EXAMPLES</div>")
    return newOutput;
}