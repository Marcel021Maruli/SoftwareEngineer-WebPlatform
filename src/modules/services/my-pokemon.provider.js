import { createContext, useEffect, useState } from "react";

export const MyPokemonContext = createContext({});

export const MyPokemonProvider = ({ children }) => {
  const [myPokemon, setMyPokemon] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myPokemon")) || [];
    setMyPokemon(data);
  }, []);

  return (
    <MyPokemonContext.Provider value={{ myPokemon, setMyPokemon }}>
      {children}
    </MyPokemonContext.Provider>
  );
};
