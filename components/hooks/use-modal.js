import { useState } from "react";

// Custom hook controls modal view
const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const onCloseModal = () => {
    // resume default scroll when modal is closed
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    setShowModal(false);
  };

  const onShowModal = () => {
    // remove scroll on when a modal is open
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    setShowModal(true);
  };

  return {
    showModal,
    onShowModal,
    onCloseModal,
  };
};

export default useModal;
