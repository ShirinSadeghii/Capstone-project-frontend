import Close from '../../assets/close-24px.svg';
import "../Modal/Modal.scss";
import { useNavigate } from 'react-router-dom';

const ModalHotel = ({ showModal, closeModal}) => {
const navigate = useNavigate();

  function handleSubmit (event) {
    const confirmSubmit = () => {
        navigate("/confirmhotel");
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
                Please confirm if you would like to book this hotel. 
              </p>
            </div>
          </div>

          <div className="modal__sub-container-btns">
            <button className="modal__button" onClick={closeModal}>
              Cancel
            </button>

            <button onClick={handleSubmit} class="fancy" >
                <span class="top-key"></span>
                <span class="text">Book</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
            </button>

          </div>
        </div>
      </div>
    );
  };
  
  export default ModalHotel;
  