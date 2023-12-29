import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import MemberCard from "../components/MemberCard";

const Members = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("https://ece-society.onrender.com/api/members")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); // Log the API response
        setMembers(data.data); // Access the 'data' property
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const sortedMembers = members.sort((a, b) => a.priority - b.priority);

  return (
    <Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {sortedMembers.map((member, index) => (
          <Box key={index} margin={2}>
            <MemberCard member={member} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Members;
