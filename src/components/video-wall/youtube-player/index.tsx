import React from 'react'
import {VideoProps} from "../videoProps";
import "./style.css"

const getEmbeddedUrl = (videoId: string) => `https://www.youtube.com/embed/${videoId}`;

export interface YoutubePlayerProps extends VideoProps {}

interface PlayerSize {width: string, height: string;}

function getAdaptiveSize() : PlayerSize {
    if (window.screen.width > window.screen.height) return {width: '640', height: '390'};
    else return {width: '320', height: '195'};
}

export const YoutubePlayer = (props: YoutubePlayerProps) => {
    const size: PlayerSize = getAdaptiveSize();
    // @ts-ignore
    return <p align={"center"}><iframe className="video-player"
                   src={getEmbeddedUrl(props.videoId)}
                   frameBorder='0'
                   width={size.width}
                   height={size.height}
                   allow='autoplay; encrypted-media'
                   allowFullScreen
                      title='video'/></p>
};
