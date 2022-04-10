import React from "react";
import { NavLink } from "react-router-dom";
import useNavbar from "./navbar.hook";

import { NavbarStyle } from "./navbar.style";

import PokemonLogo from "assets/images/pokemon-logo.png";

const Navbar = () => {
  const { owned, routers } = useNavbar();

  return (
    <>
      <div className={`Navbar ${NavbarStyle}`}>
        <ul className="Navbar-ul">
          <li className="Navbar-li">
            <NavLink className="Navbar-link--inactive" to="/pokemon-list">
              <img
                alt="Pokemon Logo"
                src={PokemonLogo}
                className="Navbar-logo"
              />
            </NavLink>
          </li>
          {routers.map((route) => {
            const isPokemonDetail =
              route.exact !== true && route.name !== "Pokemon Details";

            if (isPokemonDetail) {
              return (
                <li className="Navbar-li" key={route.path}>
                  <NavLink className="Navbar-link" to={route.path}>
                    {route.name}
                    {route.name === "My Pokemon" && (
                      <h4 className="Navbar-owned">Owned: {owned}</h4>
                    )}
                  </NavLink>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
