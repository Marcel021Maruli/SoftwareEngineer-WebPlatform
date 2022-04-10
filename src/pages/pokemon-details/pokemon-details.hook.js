import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";

import { uppercase } from "modules/utilities/uppercase.util";
import { randomNumber } from "modules/utilities/random-number.util";
import { capitalizeWord } from "modules/utilities/capitalize-word.util";
import { pokemonNameValidator } from "modules/validator/pokemon-name.validator";

import { GET_POKEMONS_DETAILS } from "modules/services/fetch-pokemon.graphql";
import { MyPokemonContext } from "modules/services/my-pokemon.provider";

const usePokemonDetail = () => {
  const { name } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState("");
  const [uppercaseName, setUppercaseName] = useState("");
  const [showModalFailed, setShowModalFailed] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [isNameExist, setIsNameExist] = useState(true);
  const [nickname, setNickname] = useState("");
  const { myPokemon, setMyPokemon } = useContext(MyPokemonContext);

  useEffect(() => {
    setPokemonDetail(data);
    setUppercaseName(uppercase(name));
  });

  useEffect(() => {
    setIsNameExist(pokemonNameValidator(myPokemon, nickname));
  }, [nickname]);

  const gqlVariables = {
    name: name,
  };
  var { loading, data } = useQuery(GET_POKEMONS_DETAILS, {
    variables: gqlVariables,
  });

  const handleOnClick = () => {
    if (!randomNumber()) {
      return setShowModalFailed(true);
    }
    return setShowModalSuccess(true);
  };

  const handleCloseModalFailed = () => {
    return setShowModalFailed(false);
  };

  const handleCloseModalSuccess = () => {
    return setShowModalSuccess(false);
  };

  const handleChangeName = (event) => {
    const { value } = event.target;
    const pokemonNameValidation = pokemonNameValidator(myPokemon, value);
    if (pokemonNameValidation) {
      setIsNameExist(pokemonNameValidation);
      setNickname(value);
    }
    setIsNameExist(pokemonNameValidation);
    setNickname(value);
  };

  const handleOnSubmit = async () => {
    try {
      const result = {
        nickname: uppercase(nickname),
        name: capitalizeWord(name),
        img: pokemonDetail.pokemon.sprites.front_default,
        types: pokemonDetail.pokemon.types,
      };
      if (!myPokemon) {
        setNickname("");
        setMyPokemon([result]);
        localStorage.setItem("myPokemon", JSON.stringify([result]));
        handleCloseModalSuccess();
      }
      localStorage.setItem(
        "myPokemon",
        JSON.stringify([].concat(myPokemon, result)),
      );
      setMyPokemon([].concat(myPokemon, result));
    } catch (error) {
      console.log(error);
    } finally {
      setNickname("");
      handleCloseModalSuccess();
    }
  };

  return {
    handleOnSubmit,
    handleChangeName,
    handleOnClick,
    handleCloseModalFailed,
    handleCloseModalSuccess,
    isNameExist,
    loading,
    nickname,
    pokemonDetail,
    showModalFailed,
    showModalSuccess,
    uppercaseName,
  };
};

export default usePokemonDetail;
