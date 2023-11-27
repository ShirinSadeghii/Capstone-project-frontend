// import "../HotelConfirmation/HotelConfirmation.scss";

function HotelConfirmation() {
    return (
        <div className="confirm">
            <h3 className="confirm__title">Booking Confirmation</h3>
            <div className="confirm__container">
                <p className="confirm__text">Congratulations! Your hotel booking is confirmed.</p>
                <p className="confirm__text">Reference Number: #LWVPWV4VNU </p>
            </div>
            <p className="confirm__sub-text">Your booking is confirmed. A confirmation will be sent to your email shortly.</p>
            <div className="confirm__flight-details">
            </div>
        </div>
        
    )
}

export default HotelConfirmation