P2
import React, { useState } from 'react';
const TextAreaApp = () => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Text Area Example</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type something here..."
        value={text}
        onChange={handleChange}
      />
      <p>Updated Text: {text}</p>
    </div>
  );
};
export default TextAreaApp;
