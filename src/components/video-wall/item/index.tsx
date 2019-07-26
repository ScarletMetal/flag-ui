import React, {useState} from 'react';
import './style.css';
import {Image, Label, Segment} from "semantic-ui-react"
import {VideoProps} from "../videoProps";

export interface VideoWallItemProps extends VideoProps {
    onClick?: () => void;
}


const getThumbnailUrl = (videoId: string) => `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;


export const VideoWallItem = (props: VideoWallItemProps) => {
    return <div onClick={props.onClick}><Segment raised compact className={`video-wall-item`}>
        <Label attached={"bottom"}>{props.title}</Label>
        <Image className={"video-wall-icon"} src={getThumbnailUrl(props.videoId)}/>
    </Segment></div>
};
