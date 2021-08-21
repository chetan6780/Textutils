import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <div className="container"  >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "#0A1931" : "white", color: props.mode === "dark" ? "white" : "black" }} id="myBox" rows="9"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>Lowercase</button>
            </div>

            <div className="container my-3">
                <h2>Your Text summary</h2>
                <p>{text.split(" ").length} words and {text.length} Characters.</p>
                <p>
                    {0.008 * (text.split(" ").length)} Minutes to read.
                </p>
                <h2>Preview</h2>
                <p>{text || "Enter something in the textbox above to preview it here."}</p>
            </div>
        </div>
    )
}
