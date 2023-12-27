import React from 'react'
import { Box } from '@mui/material';
import MemberCard from '../components/MemberCard';

const Members = () => {
  
  const membersList = [
    {
      name: 'John Doe',
      position: 'Executive Member',
      year: 'B.Tech 2nd year',
      image: '../Assets/Capture.PNG',
      bio: 'A passionate software developer. ',
      skills: ['React', 'JavaScript', 'Node.js'],
    },
    
  ];
    return (
        <Box>
          <Box className='title'>
            ECES
          </Box>
          <Box className='title-2' marginBottom={4.5} marginLeft={20}>
            Members
          </Box>
          <Box className='title-2' marginBottom={1} marginLeft={82}>
            General Secretary
          </Box>
          {membersList.map((member, index) => (
            <Box key={index} display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="50vh">
              <MemberCard member={member} />
            </Box>
          ))}
          <Box className='title-2' marginBottom={1} marginLeft={82}>
            Joint Secretary
          </Box>
          {membersList.map((member, index) => (
            <Box key={index} display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="50vh">
              <MemberCard member={member} />
              
            </Box>
          ))}
        </Box>
    );
}

export default Members