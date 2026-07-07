import "./Footer.css";
import { Link } from "react-router-dom";

import {
FaInstagram,
FaYoutube
} from "react-icons/fa";

import logo from "../../assets/images/logo.png";

function Footer(){

return(

<footer className="footer">

<div className="container">

<div className="footer-top">

<div className="footer-logo">

<img
src={logo}
alt="F&H Dental"
/>

</div>

<div className="footer-social">

<span>Follow us at</span>

<a href="#">
<FaInstagram/>
</a>

<a href="#">
<FaYoutube/>
</a>

</div>

</div>

<div className="footer-line"></div>

<div className="footer-bottom">

<p>

© 2026 F&H Aligners & Implant Dental Clinic

</p>

<div className="footer-links">

<Link to="/whyus">

About

</Link>

<Link to="/services">

Services

</Link>

<Link to="/doctor">

Doctors

</Link>

<Link to="/contact">

Contact

</Link>

<Link to="/faq">

FAQ

</Link>


</div>

</div>

</div>

</footer>


);

}

export default Footer;