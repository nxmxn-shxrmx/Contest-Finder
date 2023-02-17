import React from "react";

const AddToCalender = (prop) => {

  let data = prop.data;
  let eventTitle = data.name;
  eventTitle.replaceAll(' ','+')
  let startDate = new Date(data.start_time);
  let curr = new Date();
  if(curr>startDate)
    return <p>-</p>
  const isoString = startDate.toISOString();
  const isoFormat = isoString.replace('.000', '').replace(/[:-]/g, '');
  let endDate = new Date(data.end_time);
  const isoString1 = endDate.toISOString();
  const isoFormat1 = isoString1.replace('.000', '').replace(/[:-]/g, '');
  let eventDescription = "Event Description";
  let eventLocation = data.url;
  let timezone = "Asia/Kolkata";
  let calendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${eventTitle}&details=${eventTitle}&dates=${isoFormat+"/"+isoFormat1}&location=${eventLocation}&trp=false`;

  return (
    <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
      Add to Google Calendar
    </a>
  );
};

export default AddToCalender;
