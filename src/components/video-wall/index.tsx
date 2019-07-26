import React, {useState} from "react"
import "./style.css"
import {VideoWallItem} from "./item";
import {VideoProps} from "./videoProps";
import {VideoModal} from "./modal";


export interface VideoWallProps {
    items: Array<VideoProps>
}

export const VideoWall = (props: VideoWallProps) => {
    return <div className={"video-wall"}>
        {props.items.map(item => <VideoWallItem {...item}/>)}
    </div>
};

