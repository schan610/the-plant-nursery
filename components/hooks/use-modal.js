import { useState } from "react";

// Custom hook controls modal view
const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const onCloseModal = () => {
    document.body.style.overflow = "auto"; // ADD THIS LINE
    document.body.style.height = "auto"; // ADD THIS LINE
    setShowModal(false);
  };

  const onShowModal = (type) => {
    document.body.style.overflow = "hidden"; // ADD THIS LINE
    document.body.style.height = "100%"; // ADD THIS LINE
    setShowModal(true);
  };

  return {
    showModal,

    onShowModal,
    onCloseModal,
  };
};

export default useModal;
