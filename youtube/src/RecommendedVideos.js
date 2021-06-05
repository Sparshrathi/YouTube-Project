import React from 'react';
import  "./RecommendedVideos.css";
import  VideoCard from "./VideoCard"
function RecommendedVideos() {
    return (
        <div className="RecommendedVideos">
        <h2>Recommended</h2>

        <div className="Recommended__Videos">
        <VideoCard />
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
