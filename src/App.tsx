import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Header from "./components/Header";
import Footer from "./components/Footer";

import routes from './routes';
import {RouteType} from "./custom-types";

const customHistory = createBrowserHistory();

const App = () => {
    let routerPages = routes.map((route: RouteType) => {
        return <Route path={route.url} component={route.component} exact={route.exact} key={route.url} />;
    });

    return (
        <Router history={customHistory}>
            <Header />

            <div className="container">
                <div className="wrap">
                    <Switch>
                        {routerPages}
                    </Switch>
                </div>
            </div>

            <Footer />
        </Router>
    );
}

export default App;
