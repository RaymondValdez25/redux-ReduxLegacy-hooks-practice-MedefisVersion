import initialState from "./initialState";
import { counterActions } from "../actions/actionTypes";

const { DECREMENT_COUNT, INCREMENT_COUNT, ZERO_COUNT } = counterActions;

const counter = (count = initialState.count, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return count + 1;

    case DECREMENT_COUNT:
      return count - 1;

    case ZERO_COUNT:
      return 0;

    default:
      return count;
  }
};
export default counter;
