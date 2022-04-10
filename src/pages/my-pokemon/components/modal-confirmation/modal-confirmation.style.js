import { css } from "@emotion/css";

export const ModalConfirmationStyle = css`
  .ModalConfirmation {
    color: black;
    text-align: center;
    &-content {
      width: 100%;
    }
    &-form-container {
      margin: 6vh 0vh;
    }
    &-input {
      border-radius: 50px;
      width: 15em;
      height: 2em;
      &:focus {
        outline: none;
      }
    }
    &-validator-message {
      color: red;
      font-size: 70%;
    }
    &-buttons {
      margin: 6vh 0vh;
      &-keep {
        background-color: white;
        color: #008000;
        font-weight: bold;
        font-size: 80%;
        height: 6vh;
        margin: 15px 10px;
        width: 30%;
        border-radius: 50px;
        border: 2px solid #008000;
        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      }
      &-release {
        font-weight: bold;
        font-size: 80%;
        height: 6vh;
        margin: 15px 10px;
        width: 30%;
        border-radius: 50px;
        border: 2px solid #f44336;
        background-color: white;
        color: #f44336;
      }
    }
  }
`;
