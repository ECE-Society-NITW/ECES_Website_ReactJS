import React from 'react'
import Sidebar from '../components/sidebar';
import EventComponent from '../components/eventCard';
import CategoryCard from '../components/categoryCard';
import PrevEventCard from '../components/prevEventCard';

const Dashboard = () => {
  return (
    <div>
      <div className='title'>
        ECES
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="event-container">
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
      </div>
      <div className='title-2'>
        Event Categories
      </div>
      <div className='event-cat-container'>
        <CategoryCard wordOfTheDay="Workshop" />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
      <div className='title-3'>
        Previous Events
      </div>
      <div className='prev-event-cat'>
        <PrevEventCard />
        <PrevEventCard />
        <PrevEventCard />
      </div>
    </div>
  )
}

export default Dashboard
