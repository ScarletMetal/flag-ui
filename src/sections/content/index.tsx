import React from "react"
import "./style.css"
import {Segment} from "semantic-ui-react";
import {PageRoutes} from "../../pages";

export default () => {
    return <Segment className={"seamless-segment"}>
        <div className={"content"}>
            <div className={"page-parent"}>
                <PageRoutes/>
            </div>
        </div>
    </Segment>
}