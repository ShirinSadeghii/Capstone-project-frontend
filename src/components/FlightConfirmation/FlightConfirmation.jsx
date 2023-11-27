import Plane from "../../assets/air-transport.png";
import "../FlightConfirmation/FlightConfirmation.scss";

function FlightConfirmation() {
    return (
        <div className="confirm">
            <h3 className="confirm__title">Booking Confirmation</h3>
            <div className="confirm__container">
                <p className="confirm__text">Congratulations! Your flight booking is confirmed.</p>
                <p className="confirm__text">Reference Number: #LWVPWV4VNU </p>
            </div>
            <p className="confirm__sub-text">Your booking is confirmed and the electronic ticket will be sent to your email.</p>
            <div className="confirm__flight-details">
                <img className="confirm__logo" src={Plane} alt="plane"></img>
                <span>DEPART</span>
                <p>Random flight - Random flght</p>
            </div>
        </div>
        
    )
}

export default FlightConfirmation