import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpCase =()=>{
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleLoCase =()=>{
        let newText=text.toLowerCase()
        setText(newText)
    }
     const handleOnChange =(event)=>{
        console.log("Clicked2")
        setText(event.target.value)
    }
    const handleTitleCase = () => {
    let newText = text
        .toLowerCase()
        .split(/\s+/) 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    setText(newText);
};
    const handleCopyText = () => {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Text copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
        });
};
    const handleClearText = () => {
    setText("");
};



    const[text,setText]=useState("")
  return (
    <>
    <div>
        <h1>{props.text}</h1>
        <div className="mb-3 my-4">
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" placeholder='Enter the Text'></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpCase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoCase}>Convert to Lowercase</button>
        <button className="btn btn-primary " onClick={handleTitleCase}>Convert to Titlecase</button>
        <button className="btn btn-primary mx-3" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary " onClick={handleClearText}>Clear Text</button>

    </div>
    <div className="container my-3">
       <h2>Your Text Summary</h2> 
<p>
  {text.trim().split(/\s+/).filter(Boolean).length} words and {text.length} characters
</p>
    </div>
    </>
  )
}
