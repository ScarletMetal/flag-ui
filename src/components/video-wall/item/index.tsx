import React, {useState} from 'react';
import './style.css';
import {Image, Label, Segment} from "semantic-ui-react"
import {Video} from "../video";

export interface VideoWallItemProps extends Video{}


const getThumbnailUrl = (videoId: string) => `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;


export const VideoWallItem = (props: VideoWallItemProps) => {
    return <Segment raised compact className={`video-wall-item`}>
        <Label attached={"bottom"}>{props.title}</Label>
        <Image className={"video-wall-icon"} onClick={() => alert(`selected ${props.videoId}`)} src={getThumbnailUrl(props.videoId)}/>
    </Segment>
};
