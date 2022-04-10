import { css } from "@emotion/css";

export const SearchFieldStyle = css`
  .Search {
    background: #f7f7f9;
    padding: 20px 0 5px 0;
    &-input {
      width: 60vw;
      max-width: 30em;
      box-sizing: border-box;
      border: none;
      border-bottom: 2px solid black;
      border-radius: 4px;
      font-size: 16px;
      background-color: #f7f7f9;
      padding-top: 12px;
      padding-bottom: 12px;
      &:focus {
        outline: none;
      }
    }
    &-button {
      max-width: 30em;
      width: inherit;
      border-bottom: 2px solid black;
      border-radius: 4px;
      font-size: 16px;
      background-color: #f7f7f9;
      background-position: 10px 10px;
      background-repeat: no-repeat;
      padding: 12px 20px 12px 40px;
    }
  }
`;
