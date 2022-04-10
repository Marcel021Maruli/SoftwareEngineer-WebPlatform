import { useContext, useState } from "react";
import { MyPokemonContext } from "modules/services/my-pokemon.provider";

const useMyPokemon = () => {
  const { myPokemon, setMyPokemon } = useContext(MyPokemonContext);
  const [showModal, setShowModal] = useState(false);
  const [pokemonTarget, setPokemonTarget] = useState("");

  const handleReleaseModal = (nickname) => {
    setShowModal(true);
    setPokemonTarget(nickname);
  };

  const handleRelease = () => {
    const dataFiltered = myPokemon.filter(
      (data) => data.nickname !== pokemonTarget,
    );
    setMyPokemon(dataFiltered);
    localStorage.setItem("myPokemon", JSON.stringify(dataFiltered));
    setShowModal(false);
  };

  return {
    myPokemon,
    handleRelease,
    handleReleaseModal,
    showModal,
    setShowModal,
  };
};

export default useMyPokemon;
