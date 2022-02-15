import React from "react";
import "./FeatureGeneralizedSection.css";

function FeatureGeneralizedSection(props){
const {img,alternate,heading,description}=props
    return(
        <div>
            <div className="feature_image_div"><img src={img}  alt={alternate} className="feature_image"/></div>
            <h4 className="feature_h4">{heading}</h4>
            <p className="feature_desc">{description}</p>
        </div>
    )

}
export default FeatureGeneralizedSection;