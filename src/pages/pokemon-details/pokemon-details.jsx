import React from "react";
import usePokemonDetail from "./pokemon-details.hook";

import Boxes from "modules/components/type-container";
import Loading from "modules/components/loading";

import { PokemonDetailsStyle } from "./pokemon-detail.style";

import Modal from "modules/components/modals";
import Layout from "modules/components/layout";
import ModalFailed from "./components/modal-failed/modal-failed";
import ModalSuccess from "./components/modal-success/modal-success";
import { capitalizeWord } from "modules/utilities/capitalize-word.util";

const PokemonDetails = () => {
  const {
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
  } = usePokemonDetail();

  return (
    <>
      <Layout className={PokemonDetailsStyle}>
        <div className="PokemonDetails">
          <div className="PokemonDetails-container container">
            {!loading && (
              <div>
                <h1 className="PokemonDetails-name">{uppercaseName}</h1>
                <div className="row">
                  <div className="col-5">
                    <img
                      className="PokemonDetails-img"
                      src={
                        pokemonDetail &&
                        pokemonDetail.pokemon.sprites.front_default
                      }
                      alt={pokemonDetail && pokemonDetail.pokemon.name}
                    />
                  </div>
                  <div className="col-6">
                    <h1>Types</h1>
                    <div className="col-12">
                      {pokemonDetail &&
                        pokemonDetail.pokemon.types.map((type) => (
                          <div className="col-6" key={type.type.name}>
                            <Boxes content={type.type.name} />
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="col-12">
                    <h1>Moves</h1>

                    {pokemonDetail &&
                      pokemonDetail.pokemon.moves.map((move) => (
                        <p className="col-2" key={move.move.name}>
                          {capitalizeWord(move.move.name)}
                        </p>
                      ))}
                  </div>

                  <div className="col-12">
                    <button
                      className="PokemonDetails-button--catch button--mobile"
                      onClick={handleOnClick}
                    >
                      Catch
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Loading isLoading={loading} />
        </div>
      </Layout>
      <div className="PokemonDetails-modal">
        <Modal showModal={showModalFailed}>
          <ModalFailed handleClose={handleCloseModalFailed} />
        </Modal>
        <Modal showModal={showModalSuccess}>
          <ModalSuccess
            nickname={nickname}
            handleClose={handleCloseModalSuccess}
            isNameExist={isNameExist}
            handleOnSubmit={handleOnSubmit}
            handleChangeName={handleChangeName}
          />
        </Modal>
      </div>
    </>
  );
};

export default PokemonDetails;
