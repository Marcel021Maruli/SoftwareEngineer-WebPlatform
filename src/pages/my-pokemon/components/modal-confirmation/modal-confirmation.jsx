import React from "react";

import Modal from "modules/components/modals";

import { ModalConfirmationStyle } from "./modal-confirmation.style";

const ModalConfirmation = ({ setShowModal, handleSubmit }) => {
  return (
    <div className={ModalConfirmationStyle}>
      <div className="ModalConfirmation">
        <div className="ModalConfirmation-content">
          <h1>Are you sure want to release this pokemon?</h1>
        </div>
      </div>
      <div className="ModalConfirmation-buttons">
        <button
          onClick={() => setShowModal(false)}
          className="ModalConfirmation-buttons-release"
        >
          No
        </button>
        <button
          className="ModalConfirmation-buttons-keep"
          onClick={handleSubmit}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default ModalConfirmation;
