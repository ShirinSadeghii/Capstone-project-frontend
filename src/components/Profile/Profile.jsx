import "../Profile/Profile.scss";
import TravelParis from "../../assets/FlightAesthetic.jpg";
import Hotel from "../../assets/HotelAesthetic.jpg";
import Planner from "../../assets/PlannerAesthetic.jpg";
import { Link } from "react-router-dom";

function Profile( {userInfo}) {

  return(
    <div className="profile">
       <h2 className="profile__title">Welcome {userInfo.name}!</h2>
       <p className="profile__sub-title">Start planning your next trip</p>
       <div className="profile__card">
        <Link to="/flightsearch">
          <span className="card__title">Browse Flights</span>
          <img className="card__img" src={TravelParis} alt="Effiel Tower"></img>
        </Link>
       </div>
       <div className="profile__card">
        <Link to="/hotelsearch">
          <span className="card__title">Book Hotels</span>
          <img className="card__img" src={Hotel} alt="Hotel Aesthetic"></img>
        </Link>
       </div>
       <div className="profile__card">
        <Link to="/planner">
          <span className="card__title">Plan Itenerary</span>
          <img className="card__img" src={Planner} alt="Planner Aesthetic"></img>
        </Link>
       </div>
    </div>

   
  )

}


export default Profile