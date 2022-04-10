import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import {
  GET_POKEMONS,
  GET_POKEMONS_DETAILS,
} from "modules/services/fetch-pokemon.graphql";
import { scrollView } from "modules/utilities/scroll-view.util";
import uniq from "lodash.uniq";

const usePokemonList = () => {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const [
    getPokemonsSearch,
    { data: resultSearchPokemon, error: errorSearchPokemon },
  ] = useLazyQuery(GET_POKEMONS_DETAILS);

  const [getPokemons, { data: dataPokemons, error: errorGetPokemon }] =
    useLazyQuery(GET_POKEMONS);

  const handleScrollView = (depth) => {
    const isNextPokemonExist =
      !!dataPokemons &&
      dataPokemons.pokemons.next !== null &&
      scrollView(depth) &&
      pokemons.length != 1;

    if (isNextPokemonExist) {
      setOffset(offset + 100);
    }
  };

  const handleOnSubmitSearch = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const payload = {
        variables: { name: searchPokemon },
      };
      await getPokemonsSearch(payload);
    } catch (error) {
      console.log(errorSearchPokemon);
    } finally {
      setIsLoading(false);
      setIsSubmit(true);
    }
  };

  const fetchPokemonList = async () => {
    setIsLoading(true);

    const payload = {
      variables: {
        limit: 100,
        offset: offset,
      },
    };
    try {
      await getPokemons(payload);
    } catch (error) {
      console.log(errorGetPokemon);
    } finally {
      setIsLoading(false);
      setIsFetching(true);
    }
  };

  const handleDefinePokemonList = (pokemonList) => {
    const hasNoPokemons =
      pokemonList &&
      pokemons.length <= 1 &&
      dataPokemons != (undefined || null);
    const hasPokemons = pokemonList && pokemons.length > 1;

    if (hasNoPokemons) {
      setPokemons(pokemonList);
    }
    if (hasPokemons) {
      const addPokemons = pokemons.concat(pokemonList);
      setPokemons(uniq(addPokemons));
    }
    setIsFetching(false);
  };

  useEffect(() => {
    fetchPokemonList();
  }, [offset]);

  useEffect(() => {
    if (isSubmit && searchPokemon != "") {
      setPokemons([resultSearchPokemon?.pokemon]);
      setIsSubmit(false);
    } else if (isSubmit && searchPokemon == "") {
      if (offset !== 0) setOffset(0);
      else if (offset === 0)
        handleDefinePokemonList(dataPokemons?.pokemons?.results);
      setIsSubmit(false);
    }
  }, [isSubmit]);

  useEffect(() => {
    if (isFetching) {
      handleDefinePokemonList(dataPokemons?.pokemons?.results);
    }
  }, [isFetching]);

  return {
    isLoading,
    setSearchPokemon,
    handleOnSubmitSearch,
    pokemons,
    searchPokemon,
    handleScrollView,
  };
};

export default usePokemonList;
