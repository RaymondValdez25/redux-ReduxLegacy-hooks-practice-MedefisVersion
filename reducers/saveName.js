import initialState from "./initialState";
import { saveNameActions } from "../actions/actionTypes";

const { SAVE_NAME} = saveNameActions;

const saveName = (displayName = initialState.displayName, action) => {

  switch(action.type){
  case(SAVE_NAME):
      console.log("display name case")
      return action.payload
  default:
      console.log("default name case")
      return displayName
}};

export default saveName
