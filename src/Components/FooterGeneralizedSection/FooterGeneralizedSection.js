import react from "react";
import './FooterGeneralizedSection.css';

function FooterGeneralizedSection(props){
const {footerHeading,footerLinks}=props
return (
    <nav className="footernav">
        <h4 className="footerh4">{footerHeading}</h4>
        <ul className="footerul">
            {footerLinks.map(link=><li><a href={link.url} className="footeranchor">{link.text}</a></li>)}
        </ul>
    </nav>
)

}

export  default FooterGeneralizedSection;