
import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../css/sidebar.css";

const Sidebar = () => {
  return (
    <Menu isOpen={true} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
      <a href="#" className="menu-item">Home</a>
      <a href="#" className="menu-item">Search</a>
      <a href="#" className="menu-item">Contact</a>
      <a href="#" className="menu-item">Send</a>
      <a href="#" className="menu-item">Profile</a>
      <a href="#" className="menu-item">Settings</a>
    </Menu>
  );
};

export default Sidebar;
