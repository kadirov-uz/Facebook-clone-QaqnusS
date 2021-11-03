import React, {useState} from 'react'
import './SaidbarWatch.css'
import { IoSettingsSharp } from 'react-icons/io5'
import { IoSettings } from 'react-icons/io5'
import { BsSearch } from 'react-icons/bs'
function SaidbarWatch() {
    const [openFriend,  setOpenFriend ] = useState(false)
    return (
        <div className="aa">
                <div className="WatchHeader">
                    <h2>Friends</h2>
                    <div className="Watchsettings" onClick={() => setOpenFriend(!openFriend)}>
                    {
                        openFriend ?  <IoSettingsSharp/>  : <IoSettings/>
                    }
                
                    </div>
                    <div className={openFriend ?  "SettingDivFriend" : "xecnima"}  >
                          <h4>Notification Settings</h4>
                          <p>You can manage how you are notified about Friends updates.</p>
                         <div className="line"></div>
                         <div className="checkbox">
                         <h4>Show notlifiction dots</h4>
                         <input type="checkbox" />
                         </div>
                       </div>
                </div>
          <div className="SearchWatch">
            <BsSearch/>
              <input type="text" placeholder="Serach Videos" />
          </div>
          <div className="HomeWatch">
              <div className="ImgDivWatch"></div>
              <h3>Home</h3>
          </div>
          <div className="Live">
              <div className="ImgDivWatch"></div>
              <h3>Live</h3>
          </div>
          <div className="showas">
              <div className="ImgDivWatch"></div>
            <h3>Shows</h3>
          </div>
          <div className="SaveVideo">
              <div className="ImgDivWatch"></div>
           <h3>SaveVideo</h3>
          </div>
        </div>
    )
}

export default SaidbarWatch
