import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";

export interface EventState {
    guests: IUser[]
    events: IEvent[]
}

export enum EventActionEnum {
    SET_GUESTS = "SET_GUESTS",
    SET_EVENTS = "SET_EVENTS"
}

export interface SetGuests {
    type: EventActionEnum.SET_GUESTS
    payload: IUser[]
}

export interface SetEvents {
    type: EventActionEnum.SET_EVENTS
    payload: IEvent[]
}

export type EventsActionType = SetGuests | SetEvents