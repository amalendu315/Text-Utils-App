import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(""); //state-variable
  const handleUPclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase !!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLOWclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase !!", "success");
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Has Been Cleared", "success");
  };
  const handleCopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection();
    props.showAlert("Copied to clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="text-center mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control text-center"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
        </div>
        <div id="buttons">
          <button
            className="btn btn-primary mx-2 my-2"
            id="btn-bhsra1"
            onClick={handleUPclick}
            disabled={text.length === 0}
          >
            Convert to UPPERCASE
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            id="btn-bhsra2"
            onClick={handleLOWclick}
            disabled={text.length === 0}
          >
            Convert to lowecase
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            id="btn-bhsra2"
            onClick={handleClearText}
            disabled={text.length === 0}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            id="btn-bhsra2"
            onClick={handleCopy}
            disabled={text.length === 0}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            id="btn-bhsra2"
            onClick={handleExtraSpaces}
            disabled={text.length === 0}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2 className="text-center mt-10">Your Text Summary</h2>
        <p className="text-center">
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p className="text-center">
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes needed to read.
        </p>
        <h2 className="text-center mt-10">PREVIEW OF YOUR GIVEN TEXT</h2>
        <p className="text-center">
          {text.length > 0 ? text : "Nothing to Preview"}
        </p>
      </div>
    </>
  );
}
