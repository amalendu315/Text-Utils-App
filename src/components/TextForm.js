import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here'); //state-variable
    const handleUPclick = () => {
        console.log("Button for UPPERCASE was clicked !!" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=> {
        console.log("On Change");
        setText(event.target.value);
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUPclick}>Convert to UPPERCASE</button>
        </div>
    )
}
