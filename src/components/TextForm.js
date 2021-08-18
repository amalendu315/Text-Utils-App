import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState(''); //state-variable
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
    const handleClearText = () => {
        let newText = '';
        setText(newText);
    }
    let style2 = {
        backgroundColor: 'transparent',
        borderRadius:'25px',
        color: 'white',
        borderColor: 'cyan'
    }
    let style3 = {
        color: 'white'
    }
    return (
        <>
            <div className="container">
                <h1 className="text-center" style={style3}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control text-center" id="myBox" style={style2} value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <div id="buttons">
                    <button className="btn btn-primary mx-2" id='btn-bhsra1' onClick={handleUPclick}>Convert to UPPERCASE</button>
                    <button className="btn btn-primary mx-2" id='btn-bhsra2' onClick={handleLOWclick}>Convert to lowecase</button>
                     <button className="btn btn-primary mx-2" id='btn-bhsra2' onClick={handleClearText}>Clear Text</button>
                </div>
            </div>
            <div className="container my-3">
                <h2 className="text-center mt-10" style={style3}>Your Text Summary</h2>
                <p className="text-center" style={style3}>{text.split(" ").length} words and {text.length} characters</p>
                <p className="text-center" style={style3}>{0.008* text.split(" ").length} Minutes needed to read.</p>
                <h2 className="text-center mt-10" style={style3}>PREVIEW OF YOUR GIVEN TEXT</h2>
                <p className="text-center" style={style3}>{text}</p>
            </div>
        </>
    )
}
