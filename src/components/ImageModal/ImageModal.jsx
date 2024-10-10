import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {image && (
        <div className={css.modalOnn}>
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className={css.image}
          />
          <p className={css.modalText}>
            {image.description || "No description available"}
          </p>
          <p className={css.modalText}>Author: {image.user.name}</p>
          <p className={css.modalText}>Localion: {image.user.location}</p>
          <p className={css.modalText}>Likes: {image.likes}</p>
          <button type="button" onClick={onClose} className={css.closeModal}>
            Close
          </button>
        </div>
      )}
    </Modal>
  );
}
