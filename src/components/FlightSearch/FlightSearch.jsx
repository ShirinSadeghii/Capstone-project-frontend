import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import "../FlightSearch/FlightSearch.scss";
import axios from 'axios';

function FlightSearch(props) {

const [flightData, setFlightData] = useState([])
const city = props.city;
const baseUrl = process.env.REACT_APP_BASE_URL;

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseUrl}/flightsearch/${city}`);
            // console.log("Response data: ", response.data);
            // console.log("City: ", props.city);
            const filteredData = response.data.filter(flight =>
                flight.destination_city === city);
                setFlightData(filteredData);
                // console.log(filteredData)
        }   catch (err) {
            console.log(err);
        }
    }
    fetchData();
}, [city]);


    return (
        <div className="flight">
            <h1 className="flight__title">Flights</h1>
            <ul className="flight__container">
                {/* Using map to loop through all flight data */}
                {flightData.map((flight, index) => {
                     return (
                        <li key={index} className="flight__list">
                            <div className="flight__item">
                                <div className="flight__item-container">
                                    <div className="flight__sub-container1">
                                        <span>{flight.time}</span>
                                        <span className="item-subtitle">{flight.date}</span>
                                    </div>
                                   <div className="flight__sub-container2">
                                        <span className="item-subtitle">{flight.current_city} - {flight.destination_city} ({flight.iata})</span>
                                        <span className="item-subtitle">{flight.airline}</span>
                                   </div>
                                    
                                </div>
                                <div className="flight__item-container">
                                    <span>{flight.price}</span>
                                    <button className="item-button">Select</button>
                                </div>
                            </div>
                        </li>
                    )
                })} 
            </ul>
        </div>
    )
}

export default FlightSearch