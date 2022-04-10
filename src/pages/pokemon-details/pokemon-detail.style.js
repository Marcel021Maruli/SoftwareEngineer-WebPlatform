import { css } from "@emotion/css";

export const PokemonDetailsStyle = css`
  .PokemonDetails {
    width: 100%;
    color: white;
    &::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
    &-container {
      margin-top: 12vh;
      margin-bottom: 5vh;
      border-collapse: collapse;
      margin-left: auto;
      margin-right: auto;
      width: 90%;
      border-radius: 50px;
      background-color: rgba(51, 51, 51, 0.8);
    }
    &-button--catch {
      margin: 5vh;
      background-color: #f44336d0;
      color: white;
      font-weight: bold;
      font-size: 100%;
      height: 6vh;
      border-radius: 50px;
      &:hover {
        opacity: 0.8;
      }
    }
    &-img {
      width: 70%;
      background-color: whitesmoke;
      border-radius: 100%;
    }
    &-name {
      padding-top: 2em;
    }
  }
`;
