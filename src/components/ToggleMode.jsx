import { Box, Button } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react'
import { useContextMode } from '../context/modeContext';

const ToggleMode = () => {

    const { mode, setMode } = useContextMode()

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    }

    return (
        <Box>
            <Button onClick={toggleMode} sx={{height:80,width:80,marginLeft:'100px'}}>
                <DarkModeIcon />
            </Button>
        </Box>
    )
}

export default ToggleMode
