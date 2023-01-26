import "./HeroImg.css";

import React from 'react'
import IntroImg from "../assets/p1.jpg"
import { Link } from "react-router-dom";

function HeroImg() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <h1>OIL & GAS COMMUNITY</h1>
            <p>Global Petroleum Network</p>
            
        </div>
    </div>
  )
}

export default HeroImg


