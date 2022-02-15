import React from "react";
import "./HeroForm.css";
import Location from "./LocationPic/Location.png"

function HeroForm(){
 
    return (
        <div>
            <div className="form_div">
                <input  type="text" className="form_input" placeholder="Enter your delivery location"/>
                <button className="input_button"><a href="/findfood" className="input_button">Find Food</a></button>
            </div>
            <div className="locate">
            <button id="loc_icon_text">
            <img src={Location} alt="Location icon" className="locate_icon"/>
            <span id="locate_text_span">Locate Me</span>
            </button>
            </div>
            <h3 className="formcity_head">Popular cities in India</h3>
            <ul className="city_ul">
            <li className="city_li"><a href="/ahmedabad" className="city_link odd">Ahmedabad </a></li>
            <li className="city_li"><a href="/banglore" className="city_link even">Bangalore </a></li>
            <li className="city_li"><a href="/chennai" className="city_link odd">Chennai   </a></li>
            <li className="city_li"><a href="/delhi" className="city_link even">Delhi     </a></li>
            <li className="city_li"><a href="/gurgaon" className="city_link odd">Gurgaon   </a></li>
            <li className="city_li"><a href="/hyderabad" className="city_link even">Hyderabad </a></li>
            <li className="city_li"><a href="/kolkata" className="city_link odd">Kolkata   </a></li>
            <li className="city_li"><a href="/mumbai" className="city_link even">Mumbai    </a></li>
            <li className="city_li"><a href="/pune" className="city_link odd">Pune      </a></li>
            <li className="city_li"><a href="/more" className="city_link even">&amp; more.</a></li>
             </ul>

        </div>
    )
}

export default HeroForm;