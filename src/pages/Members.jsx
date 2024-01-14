import React, { useEffect, useState } from 'react';
import { Box, Grid, Stack } from '@mui/material';
import MemberCard from '../components/MemberCard';
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef

const Members = () => {
  const [membersList, setMembersList] = useState([]);
  const sortedMembers = membersList.sort((a, b) => a.priority - b.priority);
  useEffect(() => {
    fetch('/members.json')
      .then((response) => response.json())
      .then((data) => setMembersList(data));
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={3}
        flexWrap="wrap"
        sx={{ margin: 'auto' }}
      >
        {sortedMembers.map((member, index) => (
          <Grid item key={index}>
            <MemberCard member={member} />
          </Grid>
        ))}
      </Stack>
    </Box>
  );
};

export default Members;
