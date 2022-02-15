import React from "react";
import AppStore from "../Footer/Footerpics/AppStorePic.png"
import GooglePlay from "../Footer/Footerpics/GooglePlayPic.png";
import "./Pocket.css";
import Pocketss1 from "./PocketPics/Pocketss1.png";
import Pocketss2 from "./PocketPics/Pocketss2.png";

function Pocket(){

    return(
<div>
    <div className="container">
    <div className="row pocketflex">
       <div className="col-sm-6 description">
            <h1 className="pocketh1">Restaurants in your pocket</h1>
            <p className="pocketpara">Order from your favorite restaurants & track<br/> on the go, with the all-new Swiggy app.</p>
            <a href="/googleplay"><img src={GooglePlay} alt="Google Play Pic" className="googleimage pocketlogo"/></a>
            <a href="/appstore"><img src={AppStore} alt="App Store Pic" className="pocketlogo"/></a>
       </div>
       <div className="col-sm-6">
           <img  src={Pocketss1} alt="screenshot of list of food on mobile" className="ss1 ss"/>
           <img  src={Pocketss2} alt="Another screenshot of list of food on mobile" className="ss2 ss"/>
        </div>
    </div>
    </div>
</div>

    )
}
export default Pocket;