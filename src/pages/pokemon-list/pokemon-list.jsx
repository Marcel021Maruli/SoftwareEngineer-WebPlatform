import React, { memo } from "react";

import usePokemonList from "./pokemon-list.hook";

import Search from "modules/components/search";
import Navbar from "modules/components/navbar";
import Loading from "modules/components/loading";

import { PokemonTableLink } from "./pokemon-list.style";
import { TableStyle, SearchContainerStyle } from "../styles/emotion/style";
import PokemonTable from "./pokemon-list-table";

const PokemonList = memo(() => {
  const {
    pokemons,
    isLoading,
    setSearchPokemon,
    handleOnSubmitSearch,
    handleScrollView,
  } = usePokemonList();

  return (
    <div className={`PokemonList Table ${TableStyle}`}>
      <div>
        <Navbar />
        <Search
          placeholder="Search Pokemon here..."
          onChange={setSearchPokemon}
          onSubmit={handleOnSubmitSearch}
        />
      </div>
      <div className="row">
        <div
          className={`col-12 input-search Search-container ${SearchContainerStyle}`}
        >
          <div className="col-12">
            <div
              className={`Table-container ${PokemonTableLink}`}
              onScroll={handleScrollView}
            >
              <PokemonTable data={pokemons} />
            </div>
          </div>
        </div>
      </div>
      <Loading isLoading={isLoading} />
    </div>
  );
});

export default PokemonList;
