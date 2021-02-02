import Page404 from "../pages/page_404";
import { RouterInterface, RoutesMapInterface } from "../custom-types";
import { mapRoutes } from "../utils"

let routes: RouterInterface = [
    {
        name: 'marketplace',
        title: 'Marketplace',
        url: '/',
        component: Page404,
        exact: true,
        logged: false
    },
    {
        name: 'marketplace2',
        title: 'Marketplace2',
        url: '/',
        component: Page404,
        exact: true,
        logged: false
    },
    {
        url: '**',
        component: Page404,
        exact: true,
        logged: false
    }
];

export let routesMap: RoutesMapInterface = mapRoutes(routes);

export default routes;
