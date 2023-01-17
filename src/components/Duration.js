import React, { useState, useEffect } from "react";
const Duration = (prop) => {   
  const [dt, setDt] = useState('');
  useEffect(() => {
    setInterval(() => {
      let start = new Date(prop.start);
      let end = new Date(prop.end);
      let curr = new Date();
      if (start < curr) start = curr;

      let diff = end.getTime() - start.getTime();
      let diffInSeconds = diff / 1000;
      let diffInMinutes = diffInSeconds / 60;
      let diffInHours = diffInMinutes / 60;
      let diffInDays = diffInHours / 24;
      let diffInYears = parseInt(diffInDays / 365);
      diffInDays -= diffInYears * 365;
      diffInDays = parseInt(diffInDays);
      diffInHours -= diffInDays * 24 + diffInYears * 365 * 24;
      diffInHours = parseInt(diffInHours);
      diffInMinutes -=
        diffInHours * 60 + diffInDays * 24 * 60 + diffInYears * 365 * 24 * 60;
      diffInMinutes = parseInt(diffInMinutes);
      diffInSeconds -=
        (diffInMinutes +
          diffInHours * 60 +
          diffInDays * 24 * 60 +
          diffInYears * 365 * 24 * 60) *
        60;
      diffInSeconds = parseInt(diffInSeconds);
      var dur = "";
      if (diffInYears)
        dur =
          diffInYears +
          "y " +
          diffInDays +
          "d " +
          diffInHours +
          "h " +
          diffInMinutes +
          "m " +
          diffInSeconds +
          "s";
      else if (diffInDays)
        dur =
          diffInDays +
          "d " +
          diffInHours +
          "h " +
          diffInMinutes +
          "m " +
          diffInSeconds +
          "s";
      else if (diffInHours)
        dur = diffInHours + "h " + diffInMinutes + "m " + diffInSeconds + "s";
      else if (diffInMinutes) dur = diffInMinutes + "m " + diffInSeconds + "s";
      else dur = diffInSeconds + "s";

      return setDt(dur)
    }, 1000);
  });
  return dt;
};
export default Duration;
