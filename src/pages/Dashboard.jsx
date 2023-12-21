import React from 'react'
import CategoryCard from '../components/categoryCard';
import PrevEventCard from '../components/prevEventCard';
import Events from '../components/Events.jsx';
import { Box } from '@mui/material';


const Dashboard = () => {
  return (
    <Box>
      <Box className='title'>
        ECES
      </Box>
      <Box className='title-2'>
        Events
      <Events/>
      </Box>
      {/* <Box className='event-cat-container'>
        <CategoryCard wordOfTheDay="Workshop" />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Box> */}
      {/* <Box className='title-3'>
        Previous Events
      </Box> */}
      {/* <Box className='prev-event-cat'>
        <PrevEventCard />
        <PrevEventCard />
        <PrevEventCard />
      </Box> */}
    </Box>
  )
}

export default Dashboard
