import "../Footer/Footer.scss";
import { Link } from "react-router-dom";
import Twitter from '../../assets/icon-twitter.png';
import Facebook from '../../assets/icon-facebook.png';
import Instagram from '../../assets/icon-instagram.png';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__socials">
                <div className="footer__icon-container">
                    <span className="footer__title">Socials</span>
                    <div className="footer__icons">
                        <a href="https://twitter.com/">
                        <img className="footer__icon" src={Twitter} alt="twitter icon"></img>
                    </a>
                    <a href="https://www.facebook.com/">
                        <img className="footer__icon" src={Facebook} alt="facebook icon"></img>
                    </a>
                    <a href="https://www.instagram.com/">
                        <img className="footer__icon" src={Instagram} alt="instagram icon"></img>
                    </a>
                    </div>
                </div>
                <div className="footer__pages">
                    <Link to="/login">
                        <span className="footer__pages-title">Login</span>
                    </Link>
                    <Link to="/profile">
                        <span className="footer__pages-title">Profile</span>
                    </Link>
                </div> 
            </div> 
            <div className="footer__tablet">
                <span className="footer__tablet-title">Navigate</span>
                <div className="footer__tablet-container">
                    <Link to="/signup">
                        <span className="footer__tablet-pages">Sign Up</span>
                    </Link>
                    <Link to="/login">
                        <span className="footer__tablet-pages">Login</span>
                    </Link>
                    <Link to="/profile">
                        <span className="footer__tablet-pages">Profile</span>
                    </Link>
                    <Link to="/planner">
                        <span className="footer__tablet-pages">Planner</span>
                    </Link>
                </div>
            </div>
            <div className="footer__contact">
                <span className="footer__title">Contact</span>
                <div className="footer__contact-container">
                    <span className="contact__subtitle">Phone</span>
                    <a href="tel:604-555-5555">(604)-555-5555</a>
                    <span className="contact__subtitle">Email</span>
                    <a href="mailto:info@thynktravel.ca">info@thynktravel.ca</a>
                </div>
            </div>
            <div className="footer__tablet">
                <span className="footer__tablet-copyright">©2023 THYNK TRAVEL |<br></br> Created By: Shirin </span>
            </div>
        </div>
    )
    
}

export default Footer;