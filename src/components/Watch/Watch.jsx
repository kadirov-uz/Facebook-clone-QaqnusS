import React from 'react'
import Header from '../Header/Header'
import SaidbarWatch from './SaidbarWatch/SaidbarWatch'
import './Watch.css'
import WatchFeed from './WatchFeed/WatchFeed'
function Watch() {
    return (
        <div className="watch">
            <Header/>
          <div className="BigWatchDiv">
            <div className="SaidbarWatch">
            <SaidbarWatch/>
            </div>
             <div className="FeedWatch">
                 <WatchFeed/>
             </div>
          </div>
        </div>
    )
}

export default Watch
