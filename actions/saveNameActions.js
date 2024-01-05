import { saveNameActions } from "../actions/actionTypes";

const { SAVE_NAME} = saveNameActions;

export const saveNameAction = (param) => ({
    type: SAVE_NAME,
    payload: param
  });