import { IUser } from "../../../models/IUser"
import { authState, authActionEnum, authActionType } from "./types"


const initialState: authState = {
    isAuth: false,
    isLoading: false,
    error: null,
    user: {} as IUser
}

export default function authReducer(state: authState = initialState, action: authActionType): authState {
    switch (action.type) {
        case authActionEnum.SET_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case authActionEnum.SET_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case authActionEnum.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case authActionEnum.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default: return state
    }
}