import Plane from "../../assets/air-transport.png";
import "../FlightConfirmation/FlightConfirmation.scss";
import { useLocation, Navigate } from "react-router-dom";

function FlightConfirmation() {
    const location = useLocation();
    const flightData = location.state?.flightData;

    // to handle case where flightData is undefined. Redirect back to home.
    if (!flightData) {
        return <Navigate to="/" />;
    }
    return (
        <div className="confirm">
            <h3 className="confirm__title">Booking Confirmation</h3>
            <div className="confirm__container">
                <p className="confirm__text">Congratulations! <br></br> Your flight booking is confirmed.</p>
                <p className="confirm__text">Reference Number: #LWVPWV4VNU </p>
            </div>
            <p className="confirm__sub-text">Your booking is confirmed and the electronic ticket will be sent to your email shortly.</p>
            <div className="confirm__bottom-container">
                <img className="confirm__logo" src={Plane} alt="plane"></img>
                <span className="confirm__depart">DEPART:</span>
                <p className="confirm__details">{flightData?.date} </p>
                <p className="confirm__details">{flightData?.time}</p>
                <p className="confirm__details">From: {flightData?.current_city} - To: {flightData?.destination_city}</p>
                <p className="confirm__details">Airline: {flightData?.airline}</p>
            </div>
        </div>
        
    )
}

export default FlightConfirmation