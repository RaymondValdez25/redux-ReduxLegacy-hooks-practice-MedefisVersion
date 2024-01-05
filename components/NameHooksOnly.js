import React, {useState} from "react";

const NameHooksOnly = () => {
 const [inputValue, setInputValue] = useState('')
 const [textboxValue, setTextBoxValue] = useState('')

  const clickHandler = (param) => {
    setInputValue(param)
  }

  return (
    <>
      <h2>Enter a Name, Hooks only</h2>
      <h3>{inputValue}</h3>
      <input type="text" onChange={(e) => setTextBoxValue(e.target.value)}></input>
      <button onClick={() => clickHandler(textboxValue)}>Save Name</button>
    </>
  );
};

export default NameHooksOnly;
