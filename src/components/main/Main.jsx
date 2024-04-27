/* eslint-disable no-unused-vars */
import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user-icon" />
      </div>
      <div className="main_container">
        <div className="greet">
          <p>
            <span>Hello, Dev</span>
          </p>
          <p>How can I help you to day?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an road trip</p>
            <img src={assets.compass_icon} alt="compass icon" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: Urban plannig</p>
            <img src={assets.bulb_icon} alt="bulb-icon" />
          </div>
          <div className="card">
            <p>Braimstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="message icon" />
          </div>
          <div className="card">
            <p>Improve the readability of the following cod e</p>
            <img src={assets.code_icon} alt="code icon" />
          </div>
        </div>
        
        <div className="main-bottom">
          <div className="searchbox">
            <input type="text" placeholder="Enter prop here" />
            <div>
              <img src={assets.gallery_icon} alt="main-bottom-icon" />
              <img src={assets.mic_icon} alt="main-bottom-icon" />
              <img src={assets.send_icon} alt="main-bottom-icon" />
            </div>
          </div>

          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double check it responsex. Your privacy and Gemini App.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
