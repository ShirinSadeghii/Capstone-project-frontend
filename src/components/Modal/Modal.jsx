import Close from '../../assets/close-24px.svg';
import "../Modal/Modal.scss";
import { useNavigate } from 'react-router-dom';

const Modal = ({ showModal, closeModal, flightData}) => {
const navigate = useNavigate();

console.log("plsss", flightData);

  function handleSubmit (event) {
    const confirmSubmit = () => {
        navigate("/confirmflight");
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
              <p className='modal__message'>
                Please confirm if you would like to book this flight to {flightData[0]?.destination_city},
                with {flightData?.airline}. 
              </p>
            </div>
          </div>

          <div className="modal__sub-container-btns">
            <button className="modal__button" onClick={closeModal}>
              Cancel
            </button>

            <button onClick={handleSubmit} className="fancy" >
                <span className="top-key"></span>
                <span className="text">Buy Ticket</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
            </button>

          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  