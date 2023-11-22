import { useState } from "react";
import "../FlightSearch/FlightSearch.scss";
import dataDetailsJson from '../../data/dataDetails.json';

function FlightSearch(props) {

const [flightData, setFlightData] = useState(dataDetailsJson)

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
                                    <span>{flight.time}</span>
                                    <span className="item-subtitle">{flight.current_city} - {flight.city} ({flight.iata})</span>
                                    <span className="item-subtitle">{flight.airline}</span>
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