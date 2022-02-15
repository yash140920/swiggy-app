import React from "react";
import "./HeroImage.css";
import hero_image from "./HeroimagePic/hero_image.png";

function HeroImage(){

    return(
        <div>
        <div><img src={hero_image} 
        alt="Hero section main pic" className="heroimage" /></div>
        </div>
    )

}

export default HeroImage;