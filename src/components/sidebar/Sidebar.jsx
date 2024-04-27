/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {

  const [extended, setExtended] = useState(false)


  return (
    <div className='sidebar'>
        <div className="top">
            <div onClick={()=>setExtended(prev=>!prev)} className="menu">
                <img src={assets.menu_icon} alt="menu-icon" />
            </div>
            <div className="new">
                <img src={assets.plus_icon} alt="new-chat" />

                {/* useState used here */}
                {extended? <p className="newchat">New chat</p>: null}
            </div>
            {extended?<div className="recent">
                <p className="recent_title">Recent</p>
                <div className="recent_entry">
                    <img src={assets.message_icon} alt="message" />
                    <p>What is react...</p>
                </div>
            </div>
            : null }
            
        </div>
        <div className="bottom">
            <div className="bottom-item recent_entry">
                <img src={assets.question_icon} alt="question"/>
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent_entry">
                <img src={assets.history_icon} alt="question"/>
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent_entry">
                <img src={assets.setting_icon} alt="question"/>
                 {extended?<p>Setting</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar