import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { HiOutlineUsers } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { VscHome } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'
import { TiGroup } from 'react-icons/ti'
import './Header.css'
import Messenger from '../messager/Messenger'
import { FiSearch } from "react-icons/fi";

import { AiFillHome, AiFillFlag } from "react-icons/ai";
import {
  MdSubscriptions,
  MdForum,
  MdNotificationsActive,
} from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrAdd } from "react-icons/gr";




function Header() {


  const [msg, setMsg] = useState()

  return (
    <div className="header">
        <div className="header__search">
        <img src="https://www.teahub.io/photos/full/172-1725552_facebook-logo-png.png" alt="" />

        <div className="header__input">
          <FiSearch />
          <input
            type="text"
            placeholder="search facebook"
            className="header__input__text"
          />
        </div>
      </div>
      <div className="header__main">
        <div className="header__options header__options--active">
        <NavLink to="/">
          <AiFillHome fontSize="large" />
          </NavLink>
        </div>
        <div className="header__options">
        <NavLink to="/">
          <AiFillFlag fontSize="large" />
          </NavLink>
        </div>
        <div className="header__options">
        <NavLink to="/">

          <MdSubscriptions fontSize="large" />
          </NavLink>
        </div>
     
        <div className="header__options" onClick={() => setMsg(!msg)}>
          <NavLink to="/"> <RiMessengerLine fontSize="large" />
            {
              msg ? <Messenger/> : <> </>
            }
          </NavLink>
        </div>
        <div className="header__options">
          <NavLink to="/" fontSize="large" >
            <TiGroup />
          </NavLink>
        </div>
      </div>
      <div className="header__additional">
        <div className="header__info">
          <CgProfile />
        </div>
        <div className="header__options">
          <GrAdd fontSize="large" />
        </div>
        <div className="header__options">
          <MdForum fontSize="large" />
        </div>
        <div className="header__options">
          <MdNotificationsActive fontSize="large" />
        </div>
        <div className="header__options">
          <MdArrowDropDown fontSize="large" />
        </div>
      </div>


     

    </div>
  )
}

export default Header
