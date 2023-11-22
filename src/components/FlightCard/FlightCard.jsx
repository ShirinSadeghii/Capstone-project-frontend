import '../FlightCard/FlightCard.scss';
import Hawaii from '../../assets/image/hawaii.jpg';
import Greece from '../../assets/image/greece.jpg';
import Paris from '../../assets/image/paris.jpeg';


function FlightCard() {
    return (
        <div className="container">
            <div className="container__card">
                <img className="card__image" src={Greece} alt="greece"></img>
            </div>
            <div className="container__card">
                <img className="card__image" src={Hawaii} alt="hawaii"></img>
            </div>
            <div className="container__card">
                <img className="card__image"  src={Paris} alt="paris"></img>
            </div>
        </div>
    )

}

export default FlightCard;