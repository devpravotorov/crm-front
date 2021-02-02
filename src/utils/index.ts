import { RouteType, RouterInterface, RoutesMapInterface } from "../custom-types";

export const mapRoutes = (routes: RouterInterface) : RoutesMapInterface => {
    let routesMap: RoutesMapInterface = {};

    routes.forEach(( {name, url}:RouteType ) => {
        if (!!name) {
            routesMap[name] = url
        }
    });

    return routesMap
}
