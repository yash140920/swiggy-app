import React from "react";
import FeatureGeneralizedSection from "../FeatureGeneralizedSection/FeatureGeneralizedSection";
import NoMinOrder from "./FeaturePics/NoMinOrder.png";
import LiveOrderTrack from "./FeaturePics/LiveOrderTrack.png";
import FastDelivery from "./FeaturePics/FastDelivery.png";
import "./Feature.css";

function Feature(){
    return(
        <div>
           <div className="row feature_flex">
             <div className="col-sm-4 feature_col"><FeatureGeneralizedSection img={NoMinOrder} alternate="No Minimum Order image" heading="No Minimum Order" description="Order in for yourself or for the group, with no restrictions on order value"/></div>
             <div className="col-sm-4 feature_col"><FeatureGeneralizedSection img={LiveOrderTrack} alternate="Live Order Tracking image" heading="Live Order Tracking" description="Know where your order is at all times, from the restaurant to your doorstep"/></div>
             <div className="col-sm-4 feature_col"><FeatureGeneralizedSection img={FastDelivery} alternate="Lightning-Fast Delivery image" heading="Lightning-Fast Delivery" description="Experience Swiggy's superfast delivery for food delivered fresh & on time"/></div>
            </div>
        </div>
    )

}
export default Feature;