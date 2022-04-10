import { ModalSuccessStyle } from "./modal-success.style";

const ModalSuccess = ({
  handleClose,
  handleChangeName,
  isNameExist,
  handleOnSubmit,
  nickname,
}) => {
  return (
    <div className={`ModalSuccess ${ModalSuccessStyle}`}>
      <div className="ModalSuccess-content">
        <h1>Yeaaaayy!!</h1>
        <p>You've catch the pokemon.</p>
      </div>
      <div className="ModalSuccess-form-container">
        <p>Name your pokemon</p>
        <input
          className="ModalSuccess-input"
          onChange={handleChangeName}
          value={nickname}
        />
        <div className="ModalSuccess-validator-message">
          {!isNameExist && nickname.length !== 0 ? (
            <p>Incorrect format or pokemon's name has existed.</p>
          ) : null}
        </div>
      </div>
      <div className="ModalSuccess-buttons">
        <button onClick={handleClose} className="ModalSuccess-buttons-release">
          Release
        </button>
        <button
          className="ModalSuccess-buttons-keep"
          disabled={!isNameExist}
          onClick={handleOnSubmit}
        >
          Take Care
        </button>
      </div>
    </div>
  );
};

export default ModalSuccess;
