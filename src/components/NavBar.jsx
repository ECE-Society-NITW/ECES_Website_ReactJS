import React, { useState } from "react";
import GoogleAuth from "./GoogleAuth";
import { useContextAuth } from "../context/AuthContext";
import {
  Menu,
  Toolbar,
  Box,
  AppBar,
  IconButton,
  Typography,
  ListItemText,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  SwipeableDrawer,
  ListItem,
  ListItemButton,
  List,
  ListItemIcon,
  Divider,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PeopleIcon from "@mui/icons-material/People";
import ShareIcon from "@mui/icons-material/Share";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const pages = ["Home", "Members", "Events", "Teams"];
const settings = ["Home", "Members", "Events", "Logout"];

const Option = (icon, text) => {
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton component={Link} to="/Members">
        <ListItemIcon>{icon}</ListItemIcon>

        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [drawerState, setDrawerState] = useState(false);
  const { user } = useContextAuth();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backdropFilter: "blur(3px)",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ borderRadius: "50%", overflow: "hidden" }}></Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 80,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "primary.light",
              textDecoration: "none",
            }}
            color="pallete.primary.main"
          >
            ECE Society
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {
                setDrawerState(true);
              }}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor={"left"}
              open={drawerState}
              onClick={() => {
                setDrawerState(false);
              }}
              onClose={() => {
                setDrawerState(false);
              }}
              onOpen={() => {
                setDrawerState(true);
              }}
              sx={{
                backdropFilter: "blur(3px)",
                backgroundColor: "rgba(40,40,40,0)",
              }}
            >
              <Box>
                <Stack
                  direction="column"
                  justifyContent="space-evenly"
                  alignItems="center"
                  sx={{ width: 250, height: 170, mt: "20px" }}
                >
                  <Avatar sx={{ height: 100, width: 100 }} src={user.picture} />
                  <Typography variant="h6">
                    {user.name ? user.name : "Jane Doe"}
                  </Typography>
                  <Typography variant="caption">
                    {user.email ? user.email : "janedoe@gmail.com"}
                  </Typography>
                </Stack>
              </Box>
              <Divider />
              <Box sx={{ width: 250 }} role="presentation">
                <List>
                  {Option(<HomeIcon />, "Home", "/")}
                  {Option(<PeopleIcon />, "Members", "/Members")}
                  {Option(<EventAvailableIcon />, "Events", "/events")}
                  {Option(<LogoutIcon />, "Logout")}
                </List>
              </Box>
              <Divider />
              <Box sx={{ width: 250 }} role="presentation">
                <List>{Option(<ShareIcon />, "Invite Friends")}</List>
              </Box>
            </SwipeableDrawer>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ECE Society
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={`${user.picture}`} />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{
                mt: "45px",
                backdropFilter: "blur(1px)",
                backgroundColor: "rgba(40,40,40,0)",
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <GoogleAuth />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
