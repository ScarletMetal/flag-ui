import React, {useState} from "react"
import "./style.css"
import {VideoWallItem} from "./item";
import {VideoProps} from "./videoProps";
import {VideoModal} from "./modal";


export interface VideoWallProps {
    items: Array<VideoProps>
}

export const VideoWall = (props: VideoWallProps) => {

    const [open, setOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState({
        videoId: "",
        title: "",
    });

    // @ts-ignore
    return <div className={"video-wall"}>
        <VideoModal open={open} setOpen={setOpen} videoId={selectedVideo.videoId} title={selectedVideo.title}/>
        {props.items.map((item, index) => <VideoWallItem onClick={() => {
            setOpen(true);
            setSelectedVideo(item)

        }} key={index} {...item}/>)}
    </div>
};

