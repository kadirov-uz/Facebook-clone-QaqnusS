import React from 'react'
import './WatchFeed.css'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
function WatchFeed() {
    return (
        <div className="WatchFeed">
        <div className="BigLarge">
           <div className="HeaderFeedWatch">
               <div className="imgWatch"></div>
               <div className="textWatch">
               <span>Channel Name</span>
               <p>Data</p>
               </div>
          <p className="AbsoluteSvg"><BiDotsHorizontalRounded/></p>
           </div>
           <div className="VideosFeed">
            <video src="https://youtu.be/EHkozMIXZ8w"></video>
        </div>
        <div className="commentLikeWatch">
            
        </div>
        </div>
        <div className="BigLarge">
           <div className="HeaderFeedWatch">
               <div className="imgWatch"></div>
               <div className="textWatch">
               <span>Channel Name</span>
               <p>Data</p>
               </div>
          <p className="AbsoluteSvg"><BiDotsHorizontalRounded/></p>
           </div>
           <div className="VideosFeed">
            <video src="https://youtu.be/EHkozMIXZ8w"></video>
        </div>
        <div className="commentLikeWatch">

        </div>
        </div>
        <div className="BigLarge">
           <div className="HeaderFeedWatch">
               <div className="imgWatch"></div>
               <div className="textWatch">
               <span>Channel Name</span>
               <p>Data</p>
               </div>
          <p className="AbsoluteSvg"><BiDotsHorizontalRounded/></p>
           </div>
           <div className="VideosFeed">
            <h1>Hello</h1>
            <video src="https://youtu.be/dHaMFf0jKRE" autoPlay ></video>
        </div>
        <div className="commentLikeWatch">

        </div>
        </div>
  
        </div>
    )
}

export default WatchFeed
