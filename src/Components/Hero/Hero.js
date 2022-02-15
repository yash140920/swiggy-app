import React from "react";
import NavForm from "../NavForm/NavForm.js";
import HeroImage from "../HeroImage/HeroImage.js";
import "./Hero.css";

function Hero(){

    return(
        <div className=" row hero_flex">
        <div className="hero_navform"><NavForm /></div>      {/* swiggy logo + login +signup*/}
        <div className="hero_image"><HeroImage/></div>       {/* right side image*/}
        </div>
    )
}

export default Hero;