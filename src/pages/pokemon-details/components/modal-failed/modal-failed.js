import { ModalFailedStyle } from "./modal-failed.style";

const ModalFailed = ({ handleClose }) => {
  return (
    <div className={`ModalFailed ${ModalFailedStyle}`}>
      <div className="ModalFailed-content">
        <h1>Oopps...!!</h1>
        <p>The pokemon ran away, don't give up. You can try it again.</p>
      </div>
      <button className="ModalFailed-button" onClick={handleClose}>
        Back Detail
      </button>
    </div>
  );
};

export default ModalFailed;
