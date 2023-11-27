import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "../FlightSearch/FlightSearch.scss";
import axios from 'axios';
import Modal from '../Modal/Modal';

function FlightSearch(props) {

const [flightData, setFlightData] = useState([])
const [selectedFlight, setSelectedFlight] = useState(null);
const city = props.city;
const baseUrl = process.env.REACT_APP_BASE_URL;

const [showModal, setShowModal] = useState(false);

const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
  }

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseUrl}/flightsearch/${city}`);
            const filteredData = response.data.filter(flight =>
                flight.destination_city === city);
                setFlightData(filteredData);
        }   catch (err) {
            console.log(err);
        }
    }
    fetchData();
}, [city]);


    return (
        <div className="flight">
            <h1 className="flight__title">Flights</h1>
            {flightData.length > 0 ? (
            <ul className="flight__container">
                {/* Using map to loop through all flight data */}
                {flightData.map((flight, index) => {
                     return (
                        <li key={index} className="flight__list">
                            <Modal showModal={showModal} closeModal={closeModal} flightData={selectedFlight} />
                            <div className="flight__item">
                                <div className="flight__item-container">
                                    <div className="flight__sub-container1">
                                        <span className="flight-time">{flight.time}</span>
                                        <span className="flight-subtitle">{flight.date}</span>
                                    </div>
                                   <div className="flight__sub-container2">
                                        <span className="flight-subtitle">{flight.current_city} - {flight.destination_city} ({flight.iata})</span>
                                        <span className="flight-subtitle">{flight.airline}</span>
                                   </div>
                                    
                                </div>
                                <div className="flight__item-container">
                                    <span>{flight.price}</span>
                                    <button className="flight__button" onClick={() => {
                                        handleFlightSelect(flight);
                                        openModal();
                                        }}>
                                        <span className="text">Select</span>
                                    </button>
                                </div>
                            </div>
                        </li>
                    )
                })} 
            </ul>
               ) : (
                //display default random flights
                <ul className="flight__default-container">
                    <li className="flight__list">
                        <Modal showModal={showModal} closeModal={closeModal} flightData={selectedFlight} />
                            <div className="flight__item">
                                <div className="flight__item-container">
                                    <div className="flight__sub-container1">
                                        <span className="flight-time">10:00am-4:50pm</span>
                                        <span className="flight-subtitle">December 2, 2023</span>
                                    </div>
                                   <div className="flight__sub-container2">
                                        <span className="flight-subtitle">Vancouver - Barcelona (BCN)</span>
                                        <span className="flight-subtitle">Air Canada</span>
                                   </div>
                                    
                                </div>
                                <div className="flight__item-container">
                                    <span>$850</span>
                                    <button className="flight__button" onClick={() => {
                                        openModal();
                                        }}>
                                        <span className="text">Select</span>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="flight__list">
                            <div className="flight__item">
                                <div className="flight__item-container">
                                    <div className="flight__sub-container1">
                                        <span className="flight-time">3:30pm-7:00pm</span>
                                        <span className="flight-subtitle">December 15, 2023</span>
                                    </div>
                                   <div className="flight__sub-container2">
                                        <span className="flight-subtitle">Vancouver - Los Angeles (LAX)</span>
                                        <span className="flight-subtitle">SouthWest</span>
                                   </div>
                                    
                                </div>
                                <div className="flight__item-container">
                                    <span>$415</span>
                                    <button className="flight__button" onClick={() => {
                                        openModal();
                                        }}>
                                        <span className="text">Select</span>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="flight__list">
                            <div className="flight__item">
                                <div className="flight__item-container">
                                    <div className="flight__sub-container1">
                                        <span className="flight-time">5:30pm-1:50am</span>
                                        <span className="flight-subtitle">December 16, 2023</span>
                                    </div>
                                   <div className="flight__sub-container2">
                                        <span className="flight-subtitle">Vancouver - Athens (ATH)</span>
                                        <span className="flight-subtitle">Lufthansa</span>
                                   </div>
                                    
                                </div>
                                <div className="flight__item-container">
                                    <span>$1,500</span>
                                    <button className="flight__button" onClick={() => {
                                        openModal();
                                        }}>
                                        <span className="text">Select</span>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="flight__list">
                            <div className="flight__item">
                                <div className="flight__item-container">
                                    <div className="flight__sub-container1">
                                        <span className="flight-time">7:30pm-4:45am</span>
                                        <span className="flight-subtitle">December 22, 2023</span>
                                    </div>
                                   <div className="flight__sub-container2">
                                        <span className="flight-subtitle">Vancouver - Paris (CDG)</span>
                                        <span className="flight-subtitle">Air Canada</span>
                                   </div>
                                    
                                </div>
                                <div className="flight__item-container">
                                    <span>$1,880</span>
                                    <button className="flight__button" onClick={() => {
                                        openModal();
                                        }}>
                                        <span className="text">Select</span>
                                    </button>
                                </div>
                            </div>
                        </li>
                        
                </ul>
            )}
        </div>
    )
}

export default FlightSearch