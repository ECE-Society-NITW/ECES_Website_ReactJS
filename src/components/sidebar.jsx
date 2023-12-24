import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "../css/sidebar.css";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ContactIcon from '@mui/icons-material/ContactMail';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import GoogleAuth from "./GoogleAuth";

const Sidebar = () => {
  // eslint-disable-next-line no-unused-vars
  const [isMembersClicked, setMembersClicked] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isHomeClicked, setHomeClicked] = useState(false);
  const navigate = useNavigate();

  const handleMembersClick = () => {
    setMembersClicked(true);
    navigate('/Members');
  };
  
  const handleHomeClick = () => {
    setHomeClicked(true);
    navigate('/');
  };

  return (
    <>
    
  <Menu isOpen={false} pageWrapId="page-wrap" outerContainerId="outer-container">
      <Stack
        direction="column"
        alignItems="center"
        marginTop={2} 
        marginBottom={2} 
        sx={{backdropFilter:'blur(6px)'}}
      >
        <Box margin={3} >
          <Button startIcon={<HomeIcon />} variant="outlined" onClick={handleHomeClick}>
            Home
          </Button>
        </Box >
        <Box margin={3}>
          <Button startIcon={<SearchIcon />} variant="outlined">
            Search
          </Button>
        </Box>
        <Box margin={3}>
          <Button startIcon={<ContactIcon />} variant="outlined">
            Contact
          </Button>
        </Box>
        <Box margin={3}>
          <Button startIcon={<SendIcon />} variant="outlined">
            Send
          </Button>
        </Box >
        <Box margin={3}>
          <Button startIcon={<PersonIcon />} variant="outlined">
            Profile
          </Button>
        </Box>
        <Box margin={3} >
          <Button startIcon={<GroupIcon />} variant="outlined" marginBottom={2} onClick={handleMembersClick}>
            Members
          </Button>
        </Box>
        <Box margin={3}>
          <GoogleAuth />
        </Box>
      </Stack>
    </Menu>
    
    </>
  )
};

export default Sidebar;
