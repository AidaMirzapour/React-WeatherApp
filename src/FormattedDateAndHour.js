import React from "react";
export default function FormattedDateAndHour(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];

  let year = props.date.getFullYear();

  let dayNumber = props.date.getDate();

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let hourPeriods = "";
  if (hours > 12) {
    hourPeriods = "PM";
  } else {
    hourPeriods = "AM";
  }

  return (
    <div className="FormattedDateAndHour">
      {day}, {dayNumber} {month} {year} | {hours}:{minutes} {hourPeriods}
    </div>
  );
}
