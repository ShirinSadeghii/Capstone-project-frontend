import '../Hero/Hero.scss';
import dataJson from '../../data/data.json';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import DropDown from '../../assets/drop-down.png';


function Hero() {
const baseUrl = process.env.REACT_APP_BASE_URL;   
const navigate = useNavigate();
const params = useParams();

// const [date, setDate] = useState(new Date());
// const [showCalendar, setShowCalendar] = useState(false);

// const [flights, setFlights] = useState(dataJson)
// const [selectedFlight, setSelectedFlight] = useState(dataJson[0]);

// const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//         const response = await axios.get(`${baseUrl}/city-and-airport-search/athens`, {
//             // name: event.target.name.value, 
//         });
//         console.log("does this work?",response.data)

            // // Loop through the data array
            // for (let i = 0; i < response.data.data.length; i++) {
            //     // Check if the type is 'location' and subType is 'CITY'
            //     if (response.data.data[i].type === 'location' && response.data.data[i].subType === 'CITY') {
            //         // Log the city name
            //         console.log(response.data.data[i].name);
            //     }
            // }

//     } catch (err) {
//         console.log(err);
//     }
// };

// const handleSubmit = (event) => {
//     event.preventDefault();

//     const id = event.target.city.value;

//     dataJson.map((item) => {
//         if (item.city === id) {
//             console.log(item);
//             return item;
//         }
//     });
// };

return (
    <main className="hero">
        <div className='hero__overlay'></div>
        {/* <div className='hero__search-bar'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='city' placeholder='search location'></input>
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
                    <span className='hero__dates'>{' '} {date[0].toDateString()}
                    </span>
                    <span className='hero__dates-join'>&nbsp; to &nbsp; </span>
                    <span className='hero__dates'>{date[1].toDateString()} </span>
                    
                </div>
                )}
                <button className='hero__button'>Submit</button>
                
            </form>
        </div> */}
       
    </main>
)
}

export default Hero