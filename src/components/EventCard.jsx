import { Card, CardMedia, Chip, Typography, CardContent, CardActions, Button, Box, Stack } from '@mui/material'
import { Code, LocationOn } from '@mui/icons-material'
import React, { useEffect } from 'react'

const EventCard = ({ data: { title, description, location, photo } }) => {
    useEffect(() => {
        
    }, [])
    return (
        <>

            <Card sx={{ margin: 'auto', borderRadius: 6 }}>
                <Stack direction='row' sx={{ width: '1000px', height: '270px', padding: '10px', backgroundColor: '#282828' }}>
                    {/* <Paper elevation={20} sx={{ borderRadius: 6, width: '500px', height: '250px', borderRadius: 6 }}> */}
                    <CardMedia
                        sx={{ width: '500px', height: '250px', borderRadius: 6 }}
                        image={photo}
                        title="green iguana">
                    </CardMedia>
                    {/* </Paper> */}
                    <CardContent sx={{ height: '100%', width: '700px' }}>
                        <Stack direction='column' sx={{ height: '100%', justifyContent: 'space-between', }} >
                            <Typography gutterBottom variant="h5" color='white' component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="white">
                                {description}
                            </Typography>
                            <CardActions>
                                <Button size="small" variant='contained'>Register</Button>
                            </CardActions>
                        </Stack>
                    </CardContent>
                    <CardContent sx={{ height: '100%', width: '300px' }}>
                        <Stack>
                            <Box>
                                <Chip icon={<Code />} label="Software" />
                                <Chip icon={<LocationOn />} label="TimeSquare" />
                                <Chip icon={<Code />} label="Software" variant="outlined" />
                            </Box>
                        </Stack>
                    </CardContent>
                </Stack>
            </Card>

        </>
    )
}

export default EventCard
