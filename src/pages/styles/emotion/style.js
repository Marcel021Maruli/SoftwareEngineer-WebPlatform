import { css } from "@emotion/css";

export const SearchContainerStyle = css`
  .Search {
    &-container {
      margin: 12vh 0px 2vh 0px;
    }
  }
`;

export const TableStyle = css`
  .Table {
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    &-container {
      overflow: scroll;
      width: 100%;
      max-height: 83vh;
      &::-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }
    }
    &-td {
      text-align: left;
      padding: 8px;
    }
    &-tr {
      &:nth-of-type(even) {
        background-color: #f2f2f2;
      }
    }
    &-th {
      background-color: #333;
      text-align: left;
      color: white;
      text-align: left;
      padding: 8px;
    }
    &-link {
      &:link,
      &:visited {
        border-radius: 50px;
        padding: 0.5vh 1.5vw;
        text-align: center;
        text-decoration: none;
        display: inline-block;
      }
    }
    &-button {
      border-radius: 50px;
      padding: 1vh 1vw;
      text-align: center;
      text-decoration: none;
      display: inline-block;
    }
    &-loading {
      width: 100%, height: 50vh
    }
  }
`;
