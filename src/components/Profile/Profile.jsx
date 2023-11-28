import "../Profile/Profile.scss";
import TravelParis from "../../assets/FlightAesthetic.jpg";
import Hotel from "../../assets/HotelAesthetic.jpg";
import Planner from "../../assets/PlannerAesthetic.jpg";
import { Link } from "react-router-dom";

function Profile( {userInfo} ) {

// Save data to localStorage
if (userInfo) {
  localStorage.setItem('username', userInfo.message);
}

// Get saved data from localStorage
let username = localStorage.getItem('username');


  return(
    <div className="profile">
       <h2 className="profile__title"> {username}</h2>
      
       <p className="profile__sub-title">Start planning your next trip</p>

       <div className="profile__container">
        <div className="profile__card">
          <Link to="/flightsearch">
            <span className="card__title">Browse Flights</span>
            <img className="card__img" src={TravelParis} alt="Effiel Tower"></img>
          </Link>
        </div>
       </div>
      
       <div className="profile__container">
        <div className="profile__card">
          <Link to="/hotelsearch">
            <span className="card__title">Book Hotels</span>
            <img className="card__img" src={Hotel} alt="Hotel Aesthetic"></img>
          </Link>
        </div>
      </div>
       
       <div className="profile__container">
        <div className="profile__card">
          <Link to="/planner">
            <span className="card__title">Plan Itenerary</span>
            <img className="card__img" src={Planner} alt="Planner Aesthetic"></img>
          </Link>
        </div>
       </div>
       
    </div>

   
  )

}


export default Profile