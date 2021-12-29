import { IUser } from "../../../models/IUser"

export interface authState{
    isAuth: boolean,
    user: IUser,
    isLoading: boolean,
    error: string | null
}

export enum authActionEnum {
    SET_AUTH = 'SET_AUTH',
    SET_ERROR = 'SET_ERROR',
    SET_USER = 'SET_USER',
    SET_IS_LOADING = 'SET_IS_LOADING'
}

export interface setAuthAction {
    type: authActionEnum.SET_AUTH;
    payload: boolean
}
export interface setErrorAction {
    type: authActionEnum.SET_ERROR;
    payload: string
}
export interface setUserAction {
    type: authActionEnum.SET_USER;
    payload: IUser
}
export interface setIsLoadingAction {
    type: authActionEnum.SET_IS_LOADING;
    payload: boolean
}

export type authActionType = setAuthAction | setErrorAction | setUserAction | setIsLoadingAction