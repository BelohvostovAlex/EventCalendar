import React from 'react'

import { Calendar } from 'antd'

import {IEvent} from '../models/IEvent'
import { Moment } from 'moment';
import { formatDate } from '../utils/formatDate';

interface EventCalendarComponentProps {
    events: IEvent[]
}

const EventCalendarComponent: React.FC<EventCalendarComponentProps> = ({events}) => {
    function dateCellRender(value:Moment) {
        const formatedDate = formatDate(value.toDate())
        const currentDayEvents = events.filter(event => event.date === formatedDate)
        return (
            <div>
                {currentDayEvents.map((ev,i) => 
                    <div key={i}>{ev.description}</div>)}
            </div>
        );
      }
    return (
        <Calendar dateCellRender={dateCellRender}/>
    )
}

export default EventCalendarComponent
