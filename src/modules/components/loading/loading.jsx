import React from "react";
import loadingGif from "assets/images/loading.gif";
import { ShowLoadingStyle } from "./loading.style";
import Modal from "../modals";

const Loading = ({ isLoading, ...attributes }) => {
  return (
    <>
      <Modal showModal={isLoading} loader={true}>
        <div
          className={`Loading ${ShowLoadingStyle}`}
          {...attributes}
          data-testid="Loading-testid"
        >
          {isLoading && (
            <img className="Loading-image" alt="loading" src={loadingGif} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default Loading;
