import "../SearchBar/SearchBar.scss";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DropDown from '../../assets/drop-down.png';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function SearchBar(props) {

const [date, setDate] = useState(new Date());
const [showCalendar, setShowCalendar] = useState(false);
const [city, setCity] = useState('');
const navigate = useNavigate();
const baseUrl = process.env.REACT_APP_BASE_URL; 
const {path} = props;


const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
        const response = await axios.get(`${baseUrl}/${city}`);
        
        navigate(`/${path}/${city}`);
    } catch (err) {
        console.log(err);
    }
};


    return (
        <div className='search-bar'>
            <h2 className="search-bar__title">Search flights</h2>
            <form onSubmit={handleSubmit}>
                <input className="search-bar__input" type='text' onChange={(e) => setCity(e.target.value)} name='city' placeholder='search location'></input>
                <button className="search-bar__calendar" type="button" onClick={() => setShowCalendar(!showCalendar)}>
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