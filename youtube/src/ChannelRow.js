import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import "./ChannelRow.css";
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlined';

function ChannelRow({image,channel,verified,sunbs,noOfVideos,description}) {
    return (
        <div className="ChannelRow">  
            <Avatar  className="ChannelRow_logo" 
            alt={channel} src={image} />

            <div className="ChannelRow_text">
                <h4>{channel} {verified && <VerifiedIcon />}</h4>
                <p> {sunbs} subscribers • {noOfVideos} videos </p>
                <p> {description} </p>
            </div>
            
        </div>
    )
}

export default ChannelRow
