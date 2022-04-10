import useMyPokemon from "./my-pokemon.hook";

import { TableStyle } from "../styles/emotion/style";
import { MyPokemonButtonStyle } from "./my-pokemon.style";

import Layout from "modules/components/layout";
import Modal from "modules/components/modals";
import ModalConfirmation from "./components/modal-confirmation";

const MyPokemon = () => {
  const {
    myPokemon,
    handleRelease,
    handleReleaseModal,
    showModal,
    setShowModal,
  } = useMyPokemon();
  return (
    <Layout>
      <div
        className={`MyPokemon u-marginTop-12vh Table-container ${TableStyle} ${MyPokemonButtonStyle}`}
      >
        {myPokemon.length !== 0 ? (
          <table className="MyPokemon Table">
            <thead>
              <tr className="MyPokemon Table-tr">
                <th className="MyPokemon Table-th">Pokemon's Name</th>
                <th className="MyPokemon Table-th">Pokemon's Nickname</th>
                <th className="MyPokemon Table-th">Action</th>
              </tr>
            </thead>
            <tbody>
              {myPokemon.map((result) => {
                return (
                  <tr className="MyPokemon Table-tr" key={result.nickname}>
                    <td className="MyPokemon Table-td">{result.name}</td>
                    <td className="MyPokemon Table-td">{result.nickname}</td>
                    <td className="MyPokemon Table-td">
                      <button
                        className="MyPokemon-table-button"
                        onClick={() => handleReleaseModal(result.nickname)}
                      >
                        Remove/Release
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h3>You don't have a Pokemon, let's try to catch it.</h3>
        )}
      </div>
      <Modal showModal={showModal}>
        <ModalConfirmation
          handleSubmit={handleRelease}
          setShowModal={setShowModal}
        />
      </Modal>
    </Layout>
  );
};

export default MyPokemon;
