import React, { useEffect, useState } from 'react'
import EventCard from './EventCard.jsx'
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
                {events.map(event => {
                    return (<>
                        <EventCard data={event} />
                    </>)
                })}
            </Stack>
        </div>
    )
}

export default Events
