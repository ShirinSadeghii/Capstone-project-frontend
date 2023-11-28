import "../FlightConfirmation/FlightConfirmation.scss";
import { useLocation, Navigate } from "react-router-dom";
import Luggage from "../../assets/luggage.png";

function HotelConfirmation() {
    const location = useLocation();
    const hotelData = location.state?.hotelData;

    // to handle case where hotelData is undefined. Redirect back to home.
    if (!hotelData) {
        return <Navigate to="/" />;
    }
    return (
        <div className="confirm">
            <h3 className="confirm__title">Booking Confirmation</h3>
            <div className="confirm__container">
                <p className="confirm__text">Congratulations! <br></br> Your hotel booking is confirmed.</p>
                <p className="confirm__text">Reference Number: #KZVTWV8V6L </p>
            </div>
            <p className="confirm__sub-text">Your booking is confirmed. A confirmation will be sent to your email shortly.</p>
            <div className="confirm__bottom-container">
                <img className="confirm__logo" src={Luggage} alt="luggage icon"></img>
                <span className="confirm__details">BOOKING DETAILS:</span>
                <p className="confirm__details">Hotel: {hotelData?.name}</p>
                <p className="confirm__details">City: {hotelData?.city}</p>
                <p className="confirm__details">Nightly Rate: {hotelData?.price}</p>
            </div>
        </div>
        
    )
}

export default HotelConfirmation