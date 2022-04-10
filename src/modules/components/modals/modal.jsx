import { ModalStyle } from "./modal.style";

const Modal = ({ showModal, loader, children, ...attributes }) => {
  const showHideClassName = showModal
    ? "modal u-display-block"
    : "modal u-display-none";

  return (
    <div
      className={`Modal ${ModalStyle}`}
      data-testid="Modal-testid"
      {...attributes}
    >
      <div
        className={`Modal-container ${showHideClassName}`}
        data-testid="Modal-container-testid"
      >
        <section className={`Modal-main ${loader && "u-border-radius--100"}`}>
          {children}
        </section>
      </div>
    </div>
  );
};

export default Modal;
