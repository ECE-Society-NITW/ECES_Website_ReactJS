import React, { useEffect, useState } from 'react'
import EventCard from './EventCard'
import { Stack } from '@mui/material'
import NodeJS from '../utils/NodeJS'

const Events = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        NodeJS.GET('/api/events/')
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Stack direction='row' flexWrap='wrap' gap={2}>
                {/* <Box sx={{display:'block',width:100,backgroundColor:'red'}} xs={12} sm={6} md={4} lg={3}> */}
                    {events.map(event => {
                        return (<>
                            <EventCard key={event._id} data={event}/>
                        </>)
                    })}
                {/* </Box> */}
            </Stack>
        </div>
    )
}

export default Events
