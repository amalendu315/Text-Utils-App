import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here'); //state-variable
    const handleUPclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleLOWclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <div id="buttons">
                    <button className="btn btn-primary" id='btn-bhsra1' onClick={handleUPclick}>Convert to UPPERCASE</button>
                    <button className="btn btn-primary" id='btn-bhsra2' onClick={handleLOWclick}>Convert to lowecase</button>
                </div>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
        </>
    )
}
