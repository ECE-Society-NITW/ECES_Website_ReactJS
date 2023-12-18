import { Button } from "@mui/material";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../css/sidebar.css";
import GoogleAuth from "./GoogleAuth";

const Sidebar = () => {
  return (
    <Menu isOpen={false} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <Button>Home</Button>
      <Button>Search</Button>
      <Button>Contact</Button>
      <Button>Send</Button>
      <Button>Profile</Button>
      <Button>Settings</Button>
      <Button><GoogleAuth/></Button>
    </Menu>
  );
};

export default Sidebar;
