import Close from '../../assets/close-24px.svg';
import Luggage from "../../assets/luggage.png";
import "../Modal/Modal.scss";
import { useNavigate } from 'react-router-dom';

const ModalHotel = ({ showModal, closeModal, hotelData}) => {
const navigate = useNavigate();

  function handleSubmit (event) {
    const confirmSubmit = () => {
        navigate("/confirmhotel", {state: {hotelData}});
    }
    confirmSubmit();
}

    return (
      <div className={`modal ${showModal ? "show" : ""}`}>
        <div className="modal__content">
          <div className="modal__container">
            <div className="modal__sub-container-close">
              <img
                onClick={closeModal}
                className=""
                src={Close}
                alt="close window logo"/>
            </div>
            <div className="modal__sub-container">
              <img className="modal__logo" src={Luggage} alt="luggage icon"></img>
              <p className='modal__message'>
                Please confirm if you would like to book your stay with {hotelData?.name} 
              </p>
            </div>
          </div>

          <div className="modal__sub-container-btns">
            <button className="modal__button" onClick={closeModal}>
              Cancel
            </button>

            <button onClick={handleSubmit} className="fancy" >
                <span className="top-key"></span>
                <span className="text">Book</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
            </button>

          </div>
        </div>
      </div>
    );
  };
  
  export default ModalHotel;
  