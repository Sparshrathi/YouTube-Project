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
        image="https://i.ytimg.com/an_webp/0m_e-s6YQ4Q/mqdefault_6s.webp?du=3000&sqp=CKjh84UG&rs=AOn4CLAbUbVbISsKqaZy47MQxiY0VM73Kw"
        title="Thor Ragnarok Trailer"
        channel="Marvel Entertainment"
        views="105M"
        timestamp="1 months ago"
        />
         
        <VideoRow  
        subs="2M"
        description="The CHIRON is the fastest, most powerful, and exclusive production super sports car in BUGATTI's history. Its sophisticated design, innovative technology"
        image="https://i.ytimg.com/an_webp/5dJmua4ykdA/mqdefault_6s.webp?du=3000&sqp=CODH84UG&rs=AOn4CLB6_04SOQVSc2xllNeDQhgmy3FlfQ"
        title="BUGATTI Chiron 0-400-0 km/h in 42 seconds – A WORLD RECORD #IAA2017"
        channel="Lost Songs"
        views="11M"
        timestamp="20 days ago"
        />
        
        <VideoRow  
        subs="505K"
        description="God of War is an upcoming third-person action-adventure video game in development by Santa Monica Studio and to be published by Sony Interactive"
        image="https://i.ytimg.com/an_webp/iDSqnPbC5_8/mqdefault_6s.webp?du=3000&sqp=CLjg84UG&rs=AOn4CLDkzwrMDyS3L1up_5LigS6jIZYgeg"
        title="GOD OF WAR: THE LEGEND CONTINUES"
        channel="CarryisLive "
        views="1M"
        timestamp="3 months ago"
        />
        
        <VideoRow  
        subs="20M"
        description="Google releases a major software update to its Android mobile operating system. Last year, it rolled out Android 11. In 2021, it's announced Android 12,"
        image="https://i.ytimg.com/an_webp/NWSUcGbQaZs/mqdefault_6s.webp?du=3000&sqp=CLKc84UG&rs=AOn4CLCNzy68DsZG9xhr4cBV-26vWHl11A"
        title="Android 12 Is Here - Crazy 12 New Features🔥🔥🔥"
        channel="technical guruji"
        views="15M"
        timestamp="10 days ago"
        />
        
        <VideoRow  
        subs="25M"
        description="Mercedes-Benz S-Class TV Commercial, 'Thinking' Featuring Alicia Keys [T1] Work, schedule and fame are the last things on Alicia Keys's mind as she drives down the oceanside with her children."
        image="https://i.ytimg.com/an_webp/KitQQHm0Eoc/mqdefault_6s.webp?du=3000&sqp=CMeN84UG&rs=AOn4CLAGudHAFIrMX201xuJyR5JQ-B9ETw"
        title="The New S-Class: World Premiere | Trailer"
        channel="Mercedes benz "
        views="1M"
        timestamp="2 years ago"
        /> 

        </div>

    )
}

export default SearchPage
