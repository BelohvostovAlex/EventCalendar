import React from "react";
import EventCalendar from "../pages/EventCalendar";
import Login from "../pages/Login";

export interface IRoute {
    path:string
    component: React.ComponentType
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, component: Login}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, component: EventCalendar}
]