import {SetGuests, SetEvents, EventActionEnum} from './types'
import { IUser } from '../../../models/IUser'
import { IEvent } from '../../../models/IEvent'
import { AppDispatch } from '../..'
import axios from 'axios'


export const EventActionCreators = {
    setGuests: (payload: IUser[]):SetGuests => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]):SetEvents => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get('./users.json')
            dispatch(EventActionCreators.setGuests(response.data))
        } catch (error) {
            console.log(error)
        }
    },
    createEvent: (e: IEvent) => async (dispatch: AppDispatch) => {
        const events = localStorage.getItem('events') || '[]'
        const json = JSON.parse(events) as IEvent[]
        json.push(e)
        dispatch(EventActionCreators.setEvents(json))
        localStorage.setItem('events', JSON.stringify(json))
    },
    fetchEvents: (userName: string) => async (dispatch: AppDispatch) => {
        const events = localStorage.getItem('events') || '[]'
        const json = JSON.parse(events) as IEvent[]
        const currentEvent = json.filter((item) => item.author === userName || item.guest === userName)
        dispatch(EventActionCreators.setEvents(currentEvent))
    }
}