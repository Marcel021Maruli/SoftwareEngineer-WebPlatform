import { css } from "@emotion/css";

export const NavbarStyle = css`
  .Navbar {
    &-ul {
      list-style-type: none;
      display: flex;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333;
    }
    &-li {
      float: left;
    }
    &-owned {
      color: white;
      margin-top: 0.5vh;
    }
    &-logo {
      width: auto;
      height: 5vh;
    }
    &-link {
      display: block;
      color: white;
      text-align: center;
      padding: 0 2vw;
      text-decoration: none;
      margin: 0 1vw;
      height: 100%;
    }
    &-li &-link:hover:not(.active) &-logo {
      background-color: #111;
    }
    &-link--inactive {
      margin-left: 2vw;
      &.active {
        background-color: #333;
      }
    }
  }
  .active {
    background-color: #262626;
  }
`;
