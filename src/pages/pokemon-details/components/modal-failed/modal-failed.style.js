import { css } from "@emotion/css";

export const ModalFailedStyle = css`
  .ModalFailed {
    color: black;
    &-button {
      margin: 5vh;
      background-color: #f44336;
      color: white;
      width: 80%;
      font-weight: bold;
      font-size: 100%;
      height: 6vh;
      border-radius: 50px;
      &:hover {
        border: 2px solid #f44336;
        background-color: white;
        color: #f44336;
      }
    }
    &-content {
      width: 100%;
    }
  }
`;
