import React from "react";

import {
  decrementDay,
  decrementHour,
  decrementWeek,
  incrementDay,
  incrementHour,
  incrementWeek,
  resetToNow,
} from "../actions/dateTimeActions";

import { connect } from "react-redux";

const SetTimeWithLegacyRedux = ({
  dateTime,
  decrementDay,
  decrementHour,
  decrementWeek,
  incrementDay,
  incrementHour,
  incrementWeek,
  resetToNow,
}) => {
  const addDay = () => incrementDay(dateTime);
  const addHour = () => incrementHour(dateTime);
  const addWeek = () => incrementWeek(dateTime);

  const fallbackDay = () => decrementDay(dateTime);
  const fallbackHour = () => decrementHour(dateTime);
  const fallbackWeek = () => decrementWeek(dateTime);

  const resetDateTimeToNow = () => resetToNow(dateTime);

  return (
    <>
      <h2>Counter Non Hook based</h2>
      <h3>{dateTime}</h3>
      <button onClick={addHour}>Add an hour</button>{" "}
      <button onClick={fallbackHour}>Fall back an hour</button>{" "}
      <button onClick={addDay}>Add a day</button>{" "}
      <button onClick={fallbackDay}>Fall back a day</button>{" "}
      <button onClick={addWeek}>Add a week</button>{" "}
      <button onClick={fallbackWeek}>Fall back a week</button>{" "}
      <button onClick={resetDateTimeToNow}>Reset to Now</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  dateTime: state.setDateTime,
});

const mapDispatchToProps = (dispatch) => ({
  decrementDay: (dateTime) => dispatch(decrementDay(dateTime)),
  decrementWeek: (dateTime) => dispatch(decrementWeek(dateTime)),
  decrementHour: (dateTime) => dispatch(decrementHour(dateTime)),
  incrementDay: (dateTime) => dispatch(incrementDay(dateTime)),
  incrementHour: (dateTime) => dispatch(incrementHour(dateTime)),
  incrementWeek: (dateTime) => dispatch(incrementWeek(dateTime)),
  resetToNow: (dateTime) => dispatch(resetToNow(dateTime)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetTimeWithLegacyRedux);
