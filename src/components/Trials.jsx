import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Trials = () => {
    return (
        <Box>
            <Link to='/'>
                <Box
                    sx={{
                        height: {
                            xs: 100,
                            sm: 200,
                            md: 300,
                            lg: 400,
                            xl: 500
                        },
                        width: {
                            xs: 100,
                            sm: 200,
                            md: 300,
                            lg: 400,
                            xl: 500
                        },
                        backgroundColor:  {
                            xs: 'blue',
                            sm: 'black',
                            md: 'green',
                            lg: 'red',
                            xl: 'cyan'
                        }
                    }}
                />
            </Link>
        </Box>
    )
}

export default Trials
