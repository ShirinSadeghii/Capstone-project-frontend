import { useState, useEffect } from "react";
import axios from 'axios';
import "../HotelSearch/HotelSearch.scss";
import ModalHotel from "../ModalHotel/ModalHotel";
import Star from '../../assets/4star.png';
import Paris from '../../assets/image/paris-1.jpeg';
import NYC from '../../assets/image/nyc.jpeg';
import Athens from '../../assets/image/athens.jpeg';
import Barcelona from '../../assets/image/barcelona.jpeg';

function HotelSearch(props) {

const [hotelData, setHotelData] = useState([])
const city = props.city;
const baseUrl = process.env.REACT_APP_BASE_URL;

const [showModal, setShowModal] = useState(false);

const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseUrl}/hotelsearch/${city}`);
            const filteredData = response.data.filter(hotel =>
                hotel.city === city);
                setHotelData(filteredData);
        }   catch (err) {
            console.log(err);
        }
    }
    fetchData();
}, [city]);

    return (
            <div className="hotel">
                <h1 className="hotel__title">Hotels</h1>
                {hotelData.length > 0 ? (
                <ul className="hotel__container">
                    {/* Using map to loop through all hotel data */}
                    {hotelData.map((hotel, index) => {
                         return (
                            <li key={index} className="hotel__list">
                                <ModalHotel showModal={showModal} closeModal={closeModal} />
                                <div className="hotel__item">
                                    <div className="hotel__item-container">
                                        <div className="hotel__sub-container1">
                                            <img className="hotel__images" src={`${baseUrl}/data/images/${hotel.imagePath}`} alt={hotel.name} />
                                        </div>
                                       <div className="hotel__sub-container2">
                                            <span className="item-subtitle">{hotel.name}</span>
                                            <img className="hotel__rating" src={`${baseUrl}/data/images/${hotel.rating}`} alt="star rating" />
                                            <div className="hotel__price-container">
                                                <span className="hotel__price">{hotel.price}</span>
                                                <button className="price-button" onClick={() => {
                                                    openModal();}}>Select</button>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })} 
                </ul>
                ) : (
                    //display default random hotels
                <ul className="hotel__default-container">
                    <li className="hotel__list">
                        <ModalHotel showModal={showModal} closeModal={closeModal} />
                                <div className="hotel__item">
                                    <div className="hotel__item-container">
                                        <div className="hotel__sub-container1">
                                            <img className="hotel__images" src={Paris} alt="Paris hotel" />
                                        </div>
                                       <div className="hotel__sub-container2">
                                            <span className="item-subtitle">Four Season Paris</span>
                                            <img className="hotel__rating" src={Star} alt="star rating" />
                                            <div className="hotel__price-container">
                                                <span className="hotel__price">From $600/night</span>
                                                <button className="price-button" onClick={() => {
                                                    openModal();}}>Select</button>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                    </li>
                    <li className="hotel__list">
                        <ModalHotel showModal={showModal} closeModal={closeModal} />
                                <div className="hotel__item">
                                    <div className="hotel__item-container">
                                        <div className="hotel__sub-container1">
                                            <img className="hotel__images" src={NYC} alt="NYC hotel" />
                                        </div>
                                       <div className="hotel__sub-container2">
                                            <span className="item-subtitle">Mondrian Park Avenue</span>
                                            <img className="hotel__rating" src={Star} alt="star rating" />
                                            <div className="hotel__price-container">
                                                <span className="hotel__price">From $500/night</span>
                                                <button className="price-button" onClick={() => {
                                                    openModal();}}>Select</button>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                    </li>
                    <li className="hotel__list">
                        <ModalHotel showModal={showModal} closeModal={closeModal} />
                                <div className="hotel__item">
                                    <div className="hotel__item-container">
                                        <div className="hotel__sub-container1">
                                            <img className="hotel__images" src={Athens} alt="Athens hotel" />
                                        </div>
                                       <div className="hotel__sub-container2">
                                            <span className="item-subtitle">The Dolli at Acropolis</span>
                                            <img className="hotel__rating" src={Star} alt="star rating" />
                                            <div className="hotel__price-container">
                                                <span className="hotel__price">From $500/night</span>
                                                <button className="price-button" onClick={() => {
                                                    openModal();}}>Select</button>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                    </li>
                    <li className="hotel__list">
                        <ModalHotel showModal={showModal} closeModal={closeModal} />
                                <div className="hotel__item">
                                    <div className="hotel__item-container">
                                        <div className="hotel__sub-container1">
                                            <img className="hotel__images" src={Barcelona} alt="Barcelona hotel" />
                                        </div>
                                       <div className="hotel__sub-container2">
                                            <span className="item-subtitle">Renaissance Barcelona Hotel</span>
                                            <img className="hotel__rating" src={Star} alt="star rating" />
                                            <div className="hotel__price-container">
                                                <span className="hotel__price">From $160/night</span>
                                                <button className="price-button" onClick={() => {
                                                    openModal();}}>Select</button>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                    </li>
                </ul>
                )}
            </div>
        )

}

export default HotelSearch