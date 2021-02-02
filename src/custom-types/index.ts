import React from 'react';

export type RouteType = {
    name?: string,
    title?: string,
    url: string,
    component: React.FunctionComponent,
    exact: boolean,
    logged: boolean
}

export interface RouterInterface extends Array<RouteType>{}

export type RoutesMapInterface = {
    [keys:string]: string
}
