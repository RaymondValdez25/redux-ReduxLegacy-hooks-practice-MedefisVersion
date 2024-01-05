import { saveNameLegacyActions } from "../actions/actionTypes";

const { SAVE_NAME_LEGACY } = saveNameLegacyActions;

export const legacySaveNameAction = (param) => ({
  type: SAVE_NAME_LEGACY,
  payload: param
});