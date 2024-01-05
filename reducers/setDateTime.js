import initialState from "./initialState";
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

const setDateTime = (dateTime = initialState.dateTime, action) => {
  switch (action.type) {
    case DECREMENT_DAY:
      return new Date(
        new Date(dateTime).setDate(new Date(dateTime).getDate() - 1)
      ).toLocaleString();

    case DECREMENT_HOUR:
      return new Date(
        new Date(dateTime).setHours(new Date(dateTime).getHours() - 1)
      ).toLocaleString();

    case DECREMENT_WEEK:
      return new Date(
        new Date(dateTime).setDate(new Date(dateTime).getDate() - 7)
      ).toLocaleString();

    case INCREMENT_DAY:
      return new Date(
        new Date(dateTime).setDate(new Date(dateTime).getDate() + 1)
      ).toLocaleString();

    case INCREMENT_HOUR:
      return new Date(
        new Date(dateTime).setHours(new Date(dateTime).getHours() + 1)
      ).toLocaleString();

    case INCREMENT_WEEK:
      return new Date(
        new Date(dateTime).setDate(new Date(dateTime).getDate() + 7)
      ).toLocaleString();

    case RESET_DATETIME_TO_NOW:
      return new Date().toLocaleString();

    default:
      return dateTime;
  }
};
export default setDateTime;
