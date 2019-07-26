import React from "react"
import "./style.css"
import {VideoWallItem} from "./item";
import {Video} from "./video";


export interface VideoWallProps {
    items: Array<Video>
}

export const VideoWall = (props: VideoWallProps) => {
    return <div className={"video-wall"}>
        {props.items.map(item => <VideoWallItem {...item}/>)}
    </div>
};

