import { useEffect, useState, useContext } from "react";
import { MyPokemonContext } from "modules/services/my-pokemon.provider";
import { routes } from "App.routes";

const useNavbar = () => {
  const { myPokemon } = useContext(MyPokemonContext);
  const [owned, setOwned] = useState(myPokemon);
  const [routers, setRouters] = useState([]);

  const ownedPokemonCount = () => {
    setOwned(myPokemon.length);
  };

  useEffect(() => {
    ownedPokemonCount();
    setRouters(routes);
  });

  return {
    owned,
    routers,
  };
};

export default useNavbar;
