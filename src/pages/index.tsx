import React from "react"
import {Switch, Route, Redirect} from "react-router";
import {ContactPage} from "./contact";
import {AboutPage} from "./about";
import {EventsPage} from "./events";
import {HomePage} from "./home";


export const PageRoutes = () => <Switch>
    <Route path={"/about"} exact component={AboutPage}/>
    <Route path={"/contact"} exact component={ContactPage}/>
    <Route path={"/events"} exact component={EventsPage}/>
    <Route path={"/home"} exact component={HomePage}/>
    <Route path={"/"} exact component={() => <Redirect to={"/home"}/>}/>
</Switch>;