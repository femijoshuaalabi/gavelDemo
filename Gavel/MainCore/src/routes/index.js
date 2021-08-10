import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback="Loading...">
                <Switch>
                    {/* 
                        /***************************************************************************
                         ************************ LANDING PAGES CONFIG ROUTES *********************
                        ****************************************************************************
                    */}
                    <Route exact path="/" component={lazy(() => import(`../pages/LandingPage`))} />
                    <Route exact path="/404" component={lazy(() => import(`../pages/NotFoundPage`))} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default Routes;
