import "../SearchBar/SearchBar.scss";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DropDown from '../../assets/drop-down.png';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import dataJson from '../../data/data.json';


function SearchBar() {

const [data, setData] = useState(dataJson);
const [date, setDate] = useState(new Date());
const [showCalendar, setShowCalendar] = useState(false);
const [city, setCity] = useState("");
const navigate = useNavigate();


const handleSubmit = (event) => {
    event.preventDefault();

    const response = dataJson.map((flight) => {
        if (flight.city === city) {
            console.log(flight)
        }
        return flight
    });
    navigate("/flightsearch");
};

const handleCityChange = (event) => {
    setCity(event.target.value);
};

    return (
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <input type='text' value={city} onChange={handleCityChange} name='city' placeholder='search location'></input>
                <button type="button" onClick={() => setShowCalendar(!showCalendar)}>
                    <img className="drop-btn" src={DropDown} alt='drop-down icon' />
                </button>
                {showCalendar && ( 
                    <div>
                        <Calendar onChange={setDate} value={date} selectRange={true}/>
                    </div>
                )}
                {date.length > 0 && (
                <div>
                    <span className='search-bar__dates'>{' '} {date[0].toDateString()}
                    </span>
                    <span className='search-bar__dates-join'>&nbsp; to &nbsp; </span>
                    <span className='search-bar__dates'>{date[1].toDateString()} </span>
                    
                </div>
                )}
                <button className='search-bar__button'>Submit</button>
        </form>
    </div>
    )
}

export default SearchBar