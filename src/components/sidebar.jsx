import { Button } from "@mui/material";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../css/sidebar.css";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ContactIcon from '@mui/icons-material/ContactMail';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import GoogleAuth from "./GoogleAuth";

const Sidebar = () => {
  
  return (
    /*<Menu isOpen={false} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <Button>Home</Button>
      <Button>Search</Button>
      <Button>Contact</Button>
      <Button>Send</Button>
      <Button>Profile</Button>
      <Button>Settings</Button>
      <Button><GoogleAuth/></Button>
    </Menu>
  );*/
  <Menu isOpen={false} pageWrapId="page-wrap" outerContainerId="outer-container">
      <Stack
        direction="column"
        alignItems="center"
        marginTop={2} 
        marginBottom={2} 
      >
        <Box margin={3} >
          <Button startIcon={<HomeIcon />} variant="outlined" >
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
          <Button startIcon={<SettingsIcon />} variant="outlined" marginBottom={2}>
            Settings
          </Button>
        </Box>
        <Box margin={3}>
          <Button startIcon={<GoogleAuth />} variant="outlined">
            Google Auth
          </Button>
        </Box>
      </Stack>
    </Menu>
  )
};

export default Sidebar;
