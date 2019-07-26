import React from "react"
import {Switch, Route, Redirect} from "react-router";


export const PageRoutes = () => <Switch>
    <Route path={"/"} exact component={() => <Redirect to={"/home"}/>}/>
</Switch>;