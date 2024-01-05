import initialState from "./initialState";
import { saveNameLegacyActions } from "../actions/actionTypes";

const {SAVE_NAME_LEGACY} = saveNameLegacyActions;

const saveName = (displayName = initialState.displayName, action) => {

  switch(action.type){
  case(SAVE_NAME_LEGACY):
      return action.payload
  default:
      console.log("default name case")
      return displayName
}};

export default saveName
