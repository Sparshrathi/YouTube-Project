import React from 'react'
import "./VideoRow.css"


function VideoRow({subs, description, title , channel ,views ,timestamp, image,ThumVideo}) {
    return (
        <div className="VideoRow">
            <img  src={image} alt="" onMouseOver={e => e.currentTarget.src = ThumVideo} onMouseOut={e => e.currentTarget.src = image} />
            <div className="VideoRow_text">
                <h3>{title}</h3>
                <p className="VideoRow_headline">
                {channel} •{" "} 
                <span className="VideoRow_subs">
                    <span className="VideoRow_subsNumber">{subs}</span> subscribers 
                </span>{" "}
                {views} views • {timestamp}
                </p>
                <p className="VideoRow_description"> {description}</p>
            </div>
        </div>
    )
}

export default VideoRow
