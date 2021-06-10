import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css"

function VideoCard({image, title , channel ,views ,timestamp, channelImage ,ThumVideo}) {
    return (
        <div className="VideoCard">
            <img className="VideoCard_thumbnail" src={image} alt="" onMouseOver={e => e.currentTarget.src = ThumVideo} onMouseOut={e => e.currentTarget.src = image} />

            <div className="VideoCard_info">
                <Avatar
                className="videoCard_avatar"
                alt={channel}
                src={channelImage}
                />
            
                <div className="VideoCard_text">
                    <h4> {title} </h4>
                    <p> {channel} </p>
                    <p> {views} • {timestamp} </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
