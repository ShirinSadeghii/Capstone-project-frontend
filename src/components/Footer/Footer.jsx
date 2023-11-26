import "../Footer/Footer.scss";
import Twitter from '../../assets/icon-twitter.png';
import Facebook from '../../assets/icon-facebook.png';
import Instagram from '../../assets/icon-instagram.png';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__socials">
                <span className="footer__title">Socials</span>
                <div className="footer__icon-container">
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
            <div className="footer__contact">
                <span className="footer__title">Contact Us</span>
                <div className="footer__contact-container">
                    <span className="contact__subtitle">Phone</span>
                    <a href="tel:604-555-5555">(604)-555-5555</a>
                    <span className="contact__subtitle">Email</span>
                    <a href="mailto:info@thynktravel.ca">info@thynktravel.ca</a>
                </div>
            </div>
        </div>
    )
    
}

export default Footer;