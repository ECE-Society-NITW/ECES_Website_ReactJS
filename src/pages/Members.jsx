import React from "react";
import { Box } from "@mui/material";
import MemberCard from "../components/MemberCard";
const membersList = require('../Assets/updatedd.json')

const Members = () => {

  const sortedMembers = membersList.sort((a, b) => a.priority - b.priority);

  return (
    <Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
      {sortedMembers.map((member, index) => (
          <Box key={index} margin={2}>
            <MemberCard member={member} />
          </Box>
        ))}
      </Box>

      <Box className="title-2" marginBottom={1} marginLeft={82}>
        Joint Secretary
      </Box>
    </Box>
  );
};

export default Members;
