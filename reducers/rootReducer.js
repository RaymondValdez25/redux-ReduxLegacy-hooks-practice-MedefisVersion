import { combineReducers } from "redux";
import counter from "./counter";
import setDateTime from "./setDateTime";
import saveName from "./saveName";
import legacySaveName from "./legacySaveName"

export default combineReducers({
  counter,
  setDateTime,
  saveName,
  legacySaveName
});
