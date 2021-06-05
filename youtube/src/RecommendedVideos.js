import React from 'react';
import  "./RecommendedVideos.css";
import  VideoCard from "./VideoCard"

function RecommendedVideos() {
    return (
        <div className="RecommendedVideos">
        <h2>Recommended</h2>

        <div className="Recommended__Videos">
        <VideoCard 
            image="https://raw.githubusercontent.com/techreagan/vuetify-youtube-clone-template/master/screenshots/1%20-%20Home.jpg"
            title="My youtube clone project testing video section on 05/06/2021 15:36"
            channel="Sparsh Rathi"
            views="10M Views"
            timestamp="6 days ago"
            channelImage="https://avatars.githubusercontent.com/u/52618961?s=400&u=8a5555d9881c0caed7122cba4cdbc87339a2fdce&v=4"
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        </div>

        </div>
    )
}

export default RecommendedVideos
