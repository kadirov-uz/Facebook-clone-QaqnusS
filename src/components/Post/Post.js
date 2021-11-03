import React from 'react';
import { IoIosVideocam} from 'react-icons/io'
import{ MdPhotoLibrary, MdInsertEmoticon} from 'react-icons/md';
import  './Post.css';
import { CgProfile } from "react-icons/cg";
import {RiVideoAddFill} from 'react-icons/ri'


function Post() {
    return (

        <div className="post">
       
         <div className = "post__container">
         <div className = "post__top">
             <CgProfile 

             />
             <form>
                 <input 
                     className="post__input"
                     placeholder="What are you thinking about?"      />
                
             </form>
         </div>
         <div className = "post__bottom">
                 <div className = "post__options">
                    <IoIosVideocam className="post__videoCamIcon"/>
                    <h3>Live video</h3>
                 </div>
                 <div className = "post__options">
                    <MdPhotoLibrary className="post__photolibraryicon" />
                    <h3>Photo/Video</h3>
                 </div>
                 <div className = "post__options">
                    <MdInsertEmoticon className="post__smileIcon"/>
                    <h3>Feeling/Activity</h3>
                 </div>        
            </div>
     </div>
     <div className="post__Roommake">
     <div className = "post__VideoAdd">
                    <RiVideoAddFill className="post__videoaddIcon"/>
                    <h3>Create a room</h3>
                 </div>   
     </div>
     </div>
    )
}

export default Post
