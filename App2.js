 
import React, { useState } from "react"; 
import "./App.css"; 
 
const App = () => { 
  // State to hold the text value 
  const [text, setText] = useState(""); 
 
  // Handle text change 
  const handleChange = (e) => { 
    setText(e.target.value); 
  }; 
 
  // Clear the text area 
  const clearText = () => { 
    setText(""); 
  }; 
 
  return ( 
    <div className="app-container"> 
      <h1>Dynamic Text Area Application</h1> 
      <div className="form-container"> 
        <textarea 
          className="text-area" 
          value={text} 
          onChange={handleChange} 
          placeholder="Type something here..." 
        /> 
        <div className="controls"> 
          <button className="clear-button" onClick={clearText}> 
            Clear Text 
          </button> 
          <p className="char-counter">Character Count: {text.length}</p> 
        </div> 
      </div> 
      <div className="output-container"> 
        <h2>Preview:</h2> 
        <p className="output-text">{text || "Start typing to see the preview 
here..."}</p> 
      </div> 
    </div> 
  ); 
}; 
 
export default App; 
