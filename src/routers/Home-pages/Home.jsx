import React from 'react'
import Header from '../../components/Header/Header'
import Siadbar from '../../components/Siadbar/Siadbar'
import './Home.css'
import InvitedFriends from '../../components/InvitedFriends/InvitedFriends';
import Contact from '../../components/Contact/Contact'

function Home() {
    return (
        <div>
            <div className="homeDiv">
            <Header/>
            <div className="home__container">
            <Siadbar/>
            <InvitedFriends/>
            <Contact/>
            </div>
            </div>
        </div>
    )
}

export default Home


