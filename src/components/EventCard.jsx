import { Card, CardMedia, Chip, Typography, CardContent, CardActions, Button, Box, Stack } from '@mui/material'
import { Code, LocationOn } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import NodeJS from '../utils/NodeJS'
import { useContextSnackBar } from '../context/SnackBarContext'

const EventCard = ({ data: { event_id, title, description, location, photo, registeredUsers }, email: { email, JWT } }) => {

    const credential = JWT
    const [registered,setRegistered] = useState(false)

    const {
        setSnackBarState,
        setSnackBarSeverity,
        setSnackBarMessage
    } = useContextSnackBar()

    useEffect(() => {
        const user = registeredUsers.find(user => user.email === email)   
        if(user)
            setRegistered(true)
    }, [registeredUsers,email])

    const handleClick = () => {
        const action = registered?'unRegister':'register'
        if (JWT) {
            NodeJS.POST(`/api/events/${action}/${event_id}`, { credential })
                .then(({ success, message }) => {
                    setSnackBarSeverity(success ? 'success' : 'info')
                    setSnackBarSeverity(registered?"error":"success")
                    setSnackBarMessage(message)
                    setSnackBarState(true)
                    setRegistered(!registered)
                })
                .catch(err => console.log(err => console.log(err)))
        }
        else {
            setSnackBarSeverity('warning')
            setSnackBarMessage(`Sign in to ${action}`)
            setSnackBarState(true)
        }
    }
    return (
        <>
            <Card
                sx={{ margin: 'auto', borderRadius: 6 }}>
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
                            height: { xs: '240px', md: '250px' },
                            borderRadius: 6,
                            margin: 'auto'
                        }}
                        image={photo}
                        title={title}>
                    </CardMedia>
                    <CardContent
                        sx={{
                            height: '100%',
                            width: { xs: '300px', md: '700px' }
                        }}>
                        <Stack
                            direction='column'
                            sx={{
                                // height: '10px',
                                // width:'10px',
                                // justifyContent: 'space-between',
                                // backgroundColor:'red'
                            }}
                        >
                            <Typography gutterBottom variant="h5" color='white' component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="white">
                                {description}
                            </Typography>
                            <CardActions>
                                <Button size="small" variant='contained' disabled={false} onClick={handleClick} >{registered?'UnRegister':'Register'}</Button>
                            </CardActions>
                        </Stack>
                    </CardContent>
                    <CardContent>
                        <Stack direction='column'>
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
