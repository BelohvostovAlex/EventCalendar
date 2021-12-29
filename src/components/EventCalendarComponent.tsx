import React from 'react'

import { Calendar } from 'antd'

import {IEvent} from '../models/IEvent'

interface EventCalendarComponentProps {
    events: IEvent[]
}

const EventCalendarComponent: React.FC<EventCalendarComponentProps> = () => {
    return (
        <Calendar />
    )
}

export default EventCalendarComponent
