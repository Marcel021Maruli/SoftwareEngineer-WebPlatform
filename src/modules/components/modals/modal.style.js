import { css } from "@emotion/css";

export const ModalStyle = css`
  .Modal {
    &-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
    }
    &-main {
      position: fixed;
      background: white;
      width: 80%;
      max-width: 50em;
      height: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
