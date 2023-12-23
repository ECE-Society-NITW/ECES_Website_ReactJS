import React, { useEffect, useState } from 'react'
import EventCard from './EventCard.jsx'
import { Stack } from '@mui/material'
import NodeJS from '../utils/NodeJS'
import { useContextAuth } from '../context/AuthContext.jsx'

const Events = () => {

    const [events, setEvents] = useState([])
    const { JWT, user } = useContextAuth()

    useEffect(() => {
        NodeJS.GET('/api/events/')
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))
    },[JWT])

    return (
        <div>
            <Stack direction='row' flexWrap='wrap' gap={2}>
                {events.map(event => {
                    return (<>
                        <EventCard data={event} email={{ email:user.email, JWT }} />
                    </>)
                })}
            </Stack>
        </div>
    )
}

export default Events
