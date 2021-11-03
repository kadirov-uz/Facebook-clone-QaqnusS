import React from 'react';
import './Story.css';
import { CgProfile } from "react-icons/cg";



function Story({ image, title }) {
    return (
        <div style={{ backgroundImage : `url(${image})`, backgroundRepeat: "no-repeat"}} className="story">
        <CgProfile
            className="story__avatar"
            
        />
        <h4>{title}</h4>
    </div>
    )
}

export default Story
