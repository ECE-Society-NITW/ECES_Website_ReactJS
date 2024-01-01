import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import MemberCard from "../components/MemberCard";
const membersList = require('../Assets/members.json')

const Members = () => {

  const sortedMembers = membersList.sort((a, b) => a.priority - b.priority);

  return (
    <Box>
      <Stack container direction='row' justifyContent='center' alignItems='center' gap={3} flexWrap='wrap' sx={{ margin: 'auto' }}>
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
