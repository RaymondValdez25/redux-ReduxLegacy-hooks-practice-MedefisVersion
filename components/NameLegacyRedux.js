import React, {useState} from "react";
import {
  legacySaveNameAction
} from "../actions/saveNameLegacyAction";

import { connect } from "react-redux";

const NameLegacyRedux = ({
  legacyDisplayName,
  legacySaveNameAction
}) => {

  const saveNameFunc = (param) => legacySaveNameAction(param)
  const [inputValue, setTextBoxValue] = useState('')

  return (
    <>
      <h2>Enter a Name, Legacy Redux</h2>
      <h3>{legacyDisplayName}</h3>
      <input type="text" onChange={(e) => setTextBoxValue(e.target.value)}></input>
      <button onClick={() => saveNameFunc(inputValue)}>Save Name</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  legacyDisplayName: state.legacySaveName,
});

const mapDispatchToProps = (dispatch) => ({
  legacySaveNameAction: (param) => dispatch(legacySaveNameAction(param)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameLegacyRedux);

