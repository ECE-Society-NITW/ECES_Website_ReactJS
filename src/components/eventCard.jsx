import React, { useState, useEffect } from 'react';
import "../css/eventCard.css"
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const EventComponent = () => {
  const [events, setEvents] = useState([]);
  const [timeLeft, setTimeLeft] = useState(113); 

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://eceswebsitenodejs-production.up.railway.app/api/events');
        const data = await response.json();

        
        setEvents(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 60000); 

    
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);
  
  return (
    <div className="event-component">  
      <div className="event-list">
        {events.map(event => (
          <div key={event._id} className="event-card">
            {event.photo && (
              <img
                src={event.photo}
                alt={`Event: ${event.title}`}
                style={{ width: '200px', height: 'auto', borderRadius: '15px' }}
              />
            )}
            <div className="event-details">
              <p>Title: {event.title}</p>
              <p>Date and Time: {new Date(event.dateTime).toLocaleString()}</p>
              <p>Location: {event.location}</p>
              <p>Description: {event.description}</p>
              <p>Target Audience: {event.targetAudience}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="register-button">Register</button>
    </div>
  );
};

export default EventComponent;
