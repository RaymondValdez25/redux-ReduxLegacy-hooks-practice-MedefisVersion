import { counterActions } from "../actions/actionTypes";

const { DECREMENT_COUNT, INCREMENT_COUNT, ZERO_COUNT } = counterActions;

// Action Creators
export const incrementCounter = () => ({
  type: INCREMENT_COUNT,
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNT,
});

export const zeroCounter = () => ({
  type: ZERO_COUNT,
});
