import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar";
import './Header.css';


function Header() {
    return (
        <div className="header">

        <div className="header_left">
         
        <MenuIcon />     
        <img className="header_logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
        alt="" />
        </div>

        <div className="header_input">    
        <input placeholder="Search" type="text"/>
        <SearchIcon className="header_inputButton" />
        </div>

        <div className="header_icons">
        <VideoCallIcon className="header_icon"/>
        <AppsIcon className="header_icon"/>
        <NotificationsIcon className="header_icon"/>
        <Avatar alt="Sparsh Rathi"
        src="https://avatars.githubusercontent.com/u/52618961?s=400&u=8a5555d9881c0caed7122cba4cdbc87339a2fdce&v=4"
        />
        </div>

        </div>
    )
}

export default Header
