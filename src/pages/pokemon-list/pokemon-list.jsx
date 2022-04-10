import React, { memo } from "react";
import { Link } from "react-router-dom";

import usePokemonList from "./pokemon-list.hook";

import Search from "modules/components/search";
import Navbar from "modules/components/navbar";
import Loading from "modules/components/loading";

import { capitalizeWord } from "modules/utilities/capitalize-word.util";

import { PokemonTableLink } from "./pokemon-list.style";
import { TableStyle, SearchContainerStyle } from "../styles/emotion/style";

const PokemonList = memo(() => {
  const {
    pokemons,
    isLoading,
    setSearchPokemon,
    handleOnSubmitSearch,
    loadingGet,
    loadingSearch,
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
              <table className="PokemonList Table">
                <thead>
                  <tr className="PokemonList Table-tr">
                    <th className="PokemonList Table-th">Pokemon's Name</th>
                    <th className="PokemonList Table-th">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {pokemons &&
                    pokemons?.map((result) => {
                      return (
                        <tr className="PokemonList Table-tr" key={result?.id}>
                          <td className="PokemonList Table-td">
                            {result?.name
                              ? capitalizeWord(result?.name)
                              : "No Pokemon Found"}
                          </td>
                          <td className="PokemonList Table-td">
                            {result?.name && (
                              <Link
                                className={`PokemonList-table-link Table-link`}
                                to={`/pokemon-details/${result?.id}/${result?.name}`}
                              >
                                See Detail
                              </Link>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Loading isLoading={isLoading} />
    </div>
  );
});

export default PokemonList;
