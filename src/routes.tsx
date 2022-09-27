import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Home } from "./pages/Home";

export const Routes = (): JSX.Element => {
    return(
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}