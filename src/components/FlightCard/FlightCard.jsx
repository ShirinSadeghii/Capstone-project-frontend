import '../FlightCard/FlightCard.scss';
import Hawaii from '../../assets/image/hawaii.jpg';
import Greece from '../../assets/image/greece.jpg';
import Paris from '../../assets/image/paris.jpeg';
import { Link } from 'react-router-dom';


function FlightCard() {
const baseUrl = process.env.REACT_APP_BASE_URL;
    return (
        <div className="container">
            <div className="container__card">
                <Link to="/flightsearch/Athens">
                    <img className="card__image" src={Greece} alt="greece"></img>
                    <span className='card__city-title'>Athens</span>
               </Link> 
            </div>
            <div className="container__card">
                <Link to="/flightsearch/Honolulu">
                    <img className="card__image" src={Hawaii} alt="hawaii"></img>
                    <span className='card__city-title'>Honolulu</span>
                </Link>
            </div>
            <div className="container__card">
                <Link to="/flightsearch/Paris">
                    <img className="card__image"  src={Paris} alt="paris"></img>
                    <span className='card__city-title'>Paris</span>
                </Link>
            </div>
        </div>
    )

}

export default FlightCard;