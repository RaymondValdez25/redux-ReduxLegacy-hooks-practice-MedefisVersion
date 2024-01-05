import React, {useState} from "react";

import { useDispatch, useSelector } from "react-redux";
import {
   saveNameAction
} from "../actions/saveNameActions";


const NameRedux = () => {
 const display = useSelector((state) => state.saveName);
 const [inputValue, setInputValue] = useState('')
 const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSaveClick = (param) => dispatch(saveNameAction(param));
  return (
    <>
      <h2>Enter a Name, With Redux</h2>
      <h3>{display}</h3>
      <input type="text" value={inputValue} onChange={handleInputChange}></input>
      <button onClick={() => onSaveClick(inputValue)}>Save Name</button>{" "}
    </>
  );
};

export default NameRedux;
