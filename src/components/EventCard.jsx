import { Card, CardMedia, Chip, Typography, CardContent, CardActions, Button, Box, Stack } from '@mui/material'
import { AccessTimeRounded, EventAvailableRounded, LocationOnRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import NodeJS from '../utils/NodeJS'
import { useContextSnackBar } from '../context/SnackBarContext'
import '../css/App.css'

const EventCard = ({ data: { event_id, title, description, location, dateTime, photo, registeredUsers }, email: { email, JWT } }) => {

    const credential = JWT
    const [registered, setRegistered] = useState(false)

    const {
        setSnackBarState,
        setSnackBarSeverity,
        setSnackBarMessage
    } = useContextSnackBar()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const user = registeredUsers.find(user => user.email === email)
        if (user)
            setRegistered(true)
    }, [registeredUsers, email])

    const handleClick = async () => {
        const action = registered ? 'unRegister' : 'register'
        if (JWT) {
            try {
                setLoading(true)
                const { success, message } = await NodeJS.POST(`/api/events/${action}/${event_id}`, { credential })
                setSnackBarSeverity(success ? 'success' : 'info')
                setSnackBarSeverity(registered ? "error" : "success")
                setSnackBarMessage(message)
                setSnackBarState(true)
                setRegistered(!registered)
                setLoading(false)
            }
            catch (err) {
                console.log(err)
            }
        }
        else {
            setSnackBarSeverity('warning')
            setSnackBarMessage(`Sign in to ${action}`)
            setSnackBarState(true)
        }
        setLoading(false)
    }
    return (
        <>
            <Card
                sx={{
                    margin: 'auto',
                    borderRadius: 6,
                    transition: 'all 0.5s ease',
                    opacity: 0.95,
                    '&:hover': {
                        boxShadow: '0 0 5px #FF72CA, 0 0 10px #FF72CA, 0 0 15px #FF72CA',
                    }
                }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    sx={{
                        width: { xs: '320px', md: '1000px' },
                        minHeight: { xs: '0px', md: '270px' },
                        padding: { xs: '7px', md: '10px' },
                        backgroundColor: '#282828'
                    }}
                    justifyContent='center'
                >
                    <CardMedia
                        sx={{
                            width: { xs: '300px', md: '500px' },
                            height: { xs: '300px', md: '250px' },
                            borderRadius: 6,
                            margin: 'auto',
                        }}
                        image={photo}
                        title={title}>
                    </CardMedia>
                    <CardContent
                        sx={{
                            height: '100%',
                            width: { xs: '300px', md: '700px' }
                        }}>
                        <Stack direction='column'>
                            <Typography gutterBottom variant="h5" color='white' component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="white">
                                {description}
                            </Typography>
                            <Box><Chip variant='outlined' sx={{ borderRadius: '4px', mr: '5px', mt: '5px' }} label={location} icon={<LocationOnRounded />} /></Box>
                            <Box><Chip variant='outlined' sx={{ borderRadius: '4px', mr: '5px', mt: '5px' }} label={'30th Jan'} icon={<EventAvailableRounded />} /><Chip sx={{ borderRadius: '4px', mr: '5px', mt: '5px' }} label={"4:00 PM"} icon={<AccessTimeRounded />} /></Box>
                            <CardActions>
                                <Button className='NeonButton' size="small" variant='contained' disabled={loading} onClick={handleClick}>{registered ? 'UnRegister' : 'Register'}</Button>
                            </CardActions>
                        </Stack>
                    </CardContent>
                </Stack>
            </Card>
        </>
    )
}

export default EventCard
