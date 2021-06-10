import React from 'react';
import "./SearchPage.css";
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="SearchPage_filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
        
        <ChannelRow 
            image="https://avatars.githubusercontent.com/u/52618961?s=400&u=8a5555d9881c0caed7122cba4cdbc87339a2fdce&v=4"
            channel="Sparsh Rathi"
            verified
            sunbs="1.9M"
            noOfVideos={400}
            description="You can find awesome programming videos for ReactJs Html CSS JavaScript etc."
        />

        <hr />

        <VideoRow  
        subs="254K"
        description="Ragnarok is a Norwegian-language fantasy drama series"
        ThumVideo="https://i.pinimg.com/originals/87/58/69/8758693058eaee1cffcb8bae942fae73.gif"
        image="https://wallpapercave.com/wp/wp3787493.jpg"
        title="Thor Ragnarok Trailer"
        channel="Marvel Entertainment"
        views="105M"
        timestamp="1 months ago"
        />
         
        <VideoRow  
        subs="2M"
        description="The CHIRON is the fastest, most powerful, and exclusive production super sports car in BUGATTI's history. Its sophisticated design, innovative technology"
        ThumVideo="https://64.media.tumblr.com/4069ce0c8dfe6c611c7ab23e4888816d/tumblr_otxmh5aBdB1rnxn7co1_500.gifv"
        image="https://newsroom.bugatti/var/assets/press-releases/2021-1/210520-bugatti-shiron-sport-les-legendes-du-ciel-rafale-marine-landivisiau/1024xauto-q80/01_chiron-sport-ldc-rafale-marine.jpg"
        title="BUGATTI Chiron 0-400-0 km/h in 42 seconds – A WORLD RECORD #IAA2017"
        channel="Lost Songs"
        views="11M"
        timestamp="20 days ago"
        />
        
        <VideoRow  
        subs="505K"
        description="God of War is an upcoming third-person action-adventure video game in development by Santa Monica Studio and to be published by Sony Interactive"
        ThumVideo="https://thumbs.gfycat.com/AdmirableBlackFritillarybutterfly-size_restricted.gif"
        image="https://1734811051.rsc.cdn77.org/data/images/full/378521/god-of-war-ragnarok-available-soon-on-ps4-and-ps5-plot-release-date-and-trailer-video.jpg"
        title="GOD OF WAR: THE LEGEND CONTINUES"
        channel="CarryisLive "
        views="1M"
        timestamp="3 months ago"
        />
        
        <VideoRow  
        subs="20M"
        description="Google releases a major software update to its Android mobile operating system. Last year, it rolled out Android 11. In 2021, it's announced Android 12,"
        ThumVideo="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/3._Android_12_Color_Extraction.gif"
        image="https://www.androidpolice.com/wp-content/uploads/2021/02/19/Android-12-photo-hero-1-scaled.jpg"
        title="Android 12 Is Here - Crazy 12 New Features🔥🔥🔥"
        channel="technical guruji"
        views="15M"
        timestamp="10 days ago"
        />
        
        <VideoRow  
        subs="25M"
        description="Mercedes-Benz S-Class TV Commercial, 'Thinking' Featuring Alicia Keys [T1] Work, schedule and fame are the last things on Alicia Keys's mind as she drives down the oceanside with her children."
        ThumVideo="https://64.media.tumblr.com/5d1d59e1031b30b6a16d6f060304f059/tumblr_mgff0flBC11rkfvqno1_500.gifv"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Iwum5RSzGMO0WtoJPSCc5OiPKJxcmRsVOA&usqp=CAU"
        title="The New S-Class: World Premiere | Trailer"
        channel="Mercedes benz "
        views="1M"
        timestamp="2 years ago"
        /> 

        </div>

    )
}

export default SearchPage
