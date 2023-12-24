import React, { useState } from 'react'
import '../css/nav.css'
import GoogleAuth from './GoogleAuth'
import { useContextAuth } from '../context/AuthContext'
import { useContextMode } from '../context/ModeContext'
import { Menu, Toolbar, Box, AppBar, IconButton, Typography, ListItemText, Container, Avatar, Button, Tooltip, MenuItem, SwipeableDrawer, ListItem, ListItemButton, List, ListItemIcon } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PeopleIcon from '@mui/icons-material/People'
import LogoutIcon from '@mui/icons-material/Logout'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Link } from 'react-router-dom'

const pages = ['Products', 'Pricing', 'Blog']
const settings = ['Home', 'Members', 'Events', 'Logout']
const icons = [<HomeIcon />, <PeopleIcon />, <EventAvailableIcon />, <LogoutIcon />]

const Option = (icon, text) => {
    return (
        <ListItem key={text} disablePadding>
            <ListItemButton>
                <Link to={`/${text}`}>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                <ListItemText primary={text} />
                </Link>
            </ListItemButton>
        </ListItem>)
}

const NavBar = () => {
    const [anchorElUser, setAnchorElUser] = useState(null)
    const [drawerState, setDrawerState] = useState(false)
    const { mode, setMode } = useContextMode()
    const { user } = useContextAuth()

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    }

    return (
        <AppBar position="sticky" sx={{
            backdropFilter: 'blur(3px)',
            backgroundColor: 'rgba(0,0,0,0.3)',
        }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <Box sx={{ borderRadius: '50%', overflow: 'hidden' }}>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'primary.light',
                            textDecoration: 'none',
                        }}
                        color='pallete.primary.main'>
                        ECE Society
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={() => { setDrawerState(true) }} color="inherit"><MenuIcon /></IconButton>
                        <SwipeableDrawer anchor={'left'} open={drawerState} onClick={() => { setDrawerState(false) }}
                            sx={{
                                backdropFilter: 'blur(3px)',
                                backgroundColor: 'rgba(40,40,40,0)',
                            }}>
                            <Box sx={{ width: 250 }} role="presentation">
                                <List>
                                    {settings.map((text, index) => (
                                        Option(icons[index], text)
                                    ))}
                                </List>
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
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ECE Society
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => { }}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton sx={{ ml: '-40px' }} size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={toggleMode} color="inherit"><DarkModeIcon /></IconButton>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={`${user.picture}`} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            sx={{
                                mt: '45px',
                                backdropFilter: 'blur(1px)',
                                backgroundColor: 'rgba(40,40,40,0)',
                            }}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                            <MenuItem><GoogleAuth /></MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
}
export default NavBar
