import React from 'react'
import FooterGeneralizedSection from '../FooterGeneralizedSection/FooterGeneralizedSection'
import "./Footer.css";
import AppStore from "./Footerpics/AppStorePic.png";
import GooglePlay from "./Footerpics/GooglePlayPic.png";
import SwiggyLogo from "./Footerpics/SwiggyFooterLogo.png";
import FacebookLogo from "./Footerpics/FacebookIcon.png";
import PinterestLogo from "./Footerpics/PinterestIcon.png";
import InstagramLogo from "./Footerpics/InstagramIcon.png";
import TwitterLogo from "./Footerpics/TwitterIcon.png";

function Footer() {

const companyLinks=[{text:"About us",url:"/about"},{text:"Team",url:"/team"},{text:"Careers",url:"/careers" },
{text:"Swiggy Blog", url:"/swiggyblog"},{text:"Bug Bounty",url:"/bugbounty"},{text:"Swiggy Super",url:"/swiggysuper"},
{text:"Swiggy Corporate",url:"/swiggycorporate"},{text:"Swiggy Instamart",url:"/swiggyinstamart"}]

const contactLinks=[{text:"Help & Support",url:"/helpsupport"},{text:"Partner with us",url:"/partner"},{text:"Ride with us",url:"/ride"}]
  
const legalLinks=[{text:"Terms & Conditions",url:"/termscondition"},
{text:"Refund & Cancellation",url:"/refundcancellation"},{text:"Privacy Policy",url:"/privacypolicy"},
{text:"Cookie Policy",url:"/cookiepolicy"},{text:"Offer Terms",url:"/offerterms"},
{text:"Phishing & Fraud",url:"/phishingfraud"}]

const cityLinks=[{text:"Abohar",url:"/abohar"},{text:"Adilabad",url:"/adilabad"},{text:"Adityapur",url:"/adityapur"},
{text:"Adoni",url:"/adoni"},{text:"Agartala",url:"/agartala"}]

const city2Links=[{text:"Dausa",url:"/dausa"},{text:"Davanagere",url:"/davanagere"},{text:"Dehradun",url:"/dehradun"},
{text:"Dehri",url:"/dehri"},{text:"Delhi",url:"/delhi"}]

const city3Links=[{text:"Kishanganj",url:"/kishanganj"},{text:"Kishangarh",url:"/kishangarh"},{text:"Kochi",url:"/kochi"},
{text:"Kodaikanal",url:"/kodaikanal"},{text:"Kolar",url:"/kolar"}]

const city4Links=[{text:"Pudukkottai",url:"/pudukkotai"},{text:"Pune",url:"/pune"},{text:"Puri",url:"/puri"},
{text:"Purnea",url:"/purnea"},{text:"Purulia",url:"/purulia"}]


return (
      <div>
        <div className="container footercont">
        <div className="row flex row1">
        <div className="col-sm-3"><FooterGeneralizedSection footerHeading="Company" footerLinks={companyLinks}/></div>
        <div className="col-sm-3"><FooterGeneralizedSection footerHeading="Contact" footerLinks={contactLinks}/></div>
        <div className="col-sm-3"><FooterGeneralizedSection footerHeading="Legal" footerLinks={legalLinks}/></div>
        <div className="col-sm-3">
        <a href="/appstore" className="footerimage_anchor"><img src={AppStore} alt="App Store Pic" className="footerimage_r1"/></a>
        <a href="/googleplay" className="footerimage_anchor"><img src={GooglePlay} alt="Google Play Pic" className="footerimage_r1"/></a>
        </div>
        </div>
        <hr />
        <div className="row flex row2">
         <div className="col-sm-3"><FooterGeneralizedSection footerHeading="We Deliver To" footerLinks={cityLinks}/></div>
         <div className="col-sm-3 colwithouthead"><FooterGeneralizedSection footerLinks={city2Links}/></div>
         <div className="col-sm-3 colwithouthead"><FooterGeneralizedSection footerLinks={city3Links}/></div>
         <div className="col-sm-3 colwithouthead"><FooterGeneralizedSection footerLinks={city4Links}/></div>
        </div>
        <hr />
        <div className="row flex row3">
        <div className="col-sm-3"><a href="/swiggy"><img src={SwiggyLogo} alt ="Swiggy Logo" className="swiggylogo"/></a></div>
        <div className="col-sm-3 copyright">© 2021 Swiggy</div>
        <div className="col-sm-3">
        <a href="/facebook" className="sociallogo"><img src={FacebookLogo} alt="Facebook Logo" className="socialimage"/></a>
        <a href="/pinterest" className="sociallogo"><img src={PinterestLogo} alt="Pinterest Logo" className="socialimage"/></a>
        <a href="/instagram" className="sociallogo"><img src={InstagramLogo} alt="Instagram Logo" className="socialimage"/></a>
        <a href="/twitter" className="sociallogo"><img src={TwitterLogo} alt="Twitter Logo" className="socialimage lastsociallogo"/></a>
        </div>
        </div>
        </div>
      </div>
    )
} 

export default Footer;