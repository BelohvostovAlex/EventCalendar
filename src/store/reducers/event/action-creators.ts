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
    }
}