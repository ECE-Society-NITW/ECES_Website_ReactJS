import React, { useState, useEffect } from 'react';
import "../css/eventCard.css"
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const EventComponent = () => {
  const [timeLeft, setTimeLeft] = useState(113); // time in minutes

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 6000);
    return () => clearTimeout(timer);
  });
  
  return (
    <div className="event-component">
      <h1>ECE-NITW Upcoming Event</h1>
      <p>{timeLeft} minutes left</p>
      <div className="rating">4.9/5</div>
      <button className="register-button">Register</button>
    </div>
  );
};

export default EventComponent;
