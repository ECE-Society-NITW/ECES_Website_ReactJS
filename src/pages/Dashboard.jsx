import React from 'react'
import Events from '../components/Events.jsx';
import { Box } from '@mui/material';


const Dashboard = () => {
  return (
    <Box>
      <Box className='title-2' marginBottom={4.5} marginLeft={20}>
        Events
      </Box>
      <Events/>
    </Box>
  )
}

export default Dashboard
