import React from 'react'
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
    </Box>
  )
}

export default Dashboard
