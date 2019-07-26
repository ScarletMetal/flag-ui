import React from "react"
import {VideoWall} from "../../components/video-wall";
import {VideoProps} from "../../components/video-wall/videoProps";


const demoVideos : Array<VideoProps> = [
    {videoId: 'hqnTgpN2U_c', title: 'Rita #3388'},
    {videoId: 'o7XsimZs6pU', title: 'Shavit #5951'},
    {videoId: 'zp17V9l7l_w', title: 'Eden #2212'}
];

export const HomePage = () => {
    return <div>
        <VideoWall items={demoVideos}/>
    </div>
};