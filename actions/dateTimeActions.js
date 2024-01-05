import { dateTimeActions } from "../actions/actionTypes";

const {
  DECREMENT_DAY,
  DECREMENT_HOUR,
  DECREMENT_WEEK,
  INCREMENT_DAY,
  INCREMENT_HOUR,
  INCREMENT_WEEK,
  RESET_DATETIME_TO_NOW,
} = dateTimeActions;

// Action Creators
export const incrementDay = () => ({
  type: INCREMENT_DAY,
});

export const incrementHour = () => ({
  type: INCREMENT_HOUR,
});

export const incrementWeek = () => ({
  type: INCREMENT_WEEK,
});

export const decrementDay = () => ({
  type: DECREMENT_DAY,
});
export const decrementHour = () => ({
  type: DECREMENT_HOUR,
});
export const decrementWeek = () => ({
  type: DECREMENT_WEEK,
});

export const resetToNow = () => ({
  type: RESET_DATETIME_TO_NOW,
});
