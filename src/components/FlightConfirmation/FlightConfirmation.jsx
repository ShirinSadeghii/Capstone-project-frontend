import Plane from "../../assets/air-transport.png";
import "../FlightConfirmation/FlightConfirmation.scss";
import { useLocation } from "react-router-dom";

function FlightConfirmation() {
    const location = useLocation();
    const flightData = location.state.flightData;

    console.log(flightData)
    return (
        <div className="confirm">
            <h3 className="confirm__title">Booking Confirmation</h3>
            <div className="confirm__container">
                <p className="confirm__text">Congratulations! <br></br> Your flight booking is confirmed.</p>
                <p className="confirm__text">Reference Number: #LWVPWV4VNU </p>
            </div>
            <p className="confirm__sub-text">Your booking is confirmed and the electronic ticket will be sent to your email shortly.</p>
            <div className="confirm__flight-container">
                <img className="confirm__logo" src={Plane} alt="plane"></img>
                <span>DEPART:</span>
                <p className="confirm__flight-details">{flightData?.date} </p>
                <p className="confirm__flight-details">{flightData?.time}</p>
                <p className="confirm__flight-details">From: {flightData?.current_city} - To: {flightData?.destination_city}</p>
                <p className="confirm__flight-details">Airline: {flightData?.airline}</p>
            </div>
        </div>
        
    )
}

export default FlightConfirmation