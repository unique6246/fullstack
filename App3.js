import React, { useState, useEffect } from "react"; 
import "./App.css"; 
 
const App = () => { 
  const [inputValue, setInputValue] = useState(""); 
  const [isValid, setIsValid] = useState(true); 
  const [message, setMessage] = useState(""); 
 
  useEffect(() => { 
    validateInput(inputValue); 
  }, [inputValue]); 
 
  const validateInput = (value) => { 
    if (value.length === 0) { 
      setIsValid(false); 
      setMessage("Input cannot be empty."); 
    } else if (value.length < 5) { 
      setIsValid(false); 
      setMessage("Input must be at least 5 characters long."); 
    } else if (!/^[a-zA-Z0-9]+$/.test(value)) { 
      setIsValid(false); 
      setMessage("Input can only contain letters and numbers."); 
    } else { 
      setIsValid(true); 
      setMessage("Input is valid!"); 
    } 
  }; 
 
  return ( 
    <div className="app-container"> 
      <h1>Real-Time Input Validation</h1> 
      <div className="input-container"> 
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          className={`input-field ${isValid ? "valid" : "invalid"}`} 
          placeholder="Type something..." 
        /> 
        <p className={`message ${isValid ? "success" : "error"}`}>{message}</p> 
      </div> 
    </div> 
  ); 
}; 
 
export default App; 
