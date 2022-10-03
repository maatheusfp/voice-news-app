import React from "react";
import {  Route, BrowserRouter } from 'react-router-dom';
import { Home } from "./pages/Home";

export const Routes = (): JSX.Element => {
    return(
        <BrowserRouter>
            <Route path="/">
                <Home />
            </Route>
        </BrowserRouter>
    );
}