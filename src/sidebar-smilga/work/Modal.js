import React, { useContext } from 'react';
import { AppContext } from './AppProvider';
import { FaTimes } from 'react-icons/fa';

function Modal() {
  const state = useContext(AppContext);
  return (
    <div
      className={`${
        state.isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={state.closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
}

export default Modal;
