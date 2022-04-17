import React, { memo } from "react";
import { Link } from "react-router-dom";

import { capitalizeWord } from "modules/utilities/capitalize-word.util";

const PokemonTable = memo(({ data }) => {
  return (
    <table className="PokemonList Table">
      <thead>
        <tr className="PokemonList Table-tr">
          <th className="PokemonList Table-th">Pokemon's Name</th>
          <th className="PokemonList Table-th">Detail</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data?.map((result) => {
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
  );
});

export default PokemonTable;
