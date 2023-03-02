import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

import CartModal from "../Cart/CartModal";

const Modal = ({ onClose }) => {
  const [domReady, setDomReady] = useState(false);
  const backDropRef = useRef();

  const backDropHandler = useCallback(
    (e) => {
      if (e.target !== backDropRef.current) return;
      if (backDropRef?.current?.contains(e.target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setDomReady(true);
    document.body.style.overflow = "hidden"; // ADD THIS LINE
    document.body.style.height = "100%"; // ADD THIS LINE
    // attach event listener to the whole windor with our handler
    window.addEventListener("click", backDropHandler);
    // remove the event listener when the modal is closed
    return () => window.removeEventListener("click", backDropHandler);
  }, [backDropHandler]);

  const modalContent = (
    <div className="backdrop" ref={backDropRef}>
      <CartModal onClose={onClose} />
    </div>
  );

  if (domReady) {
    const portal = createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
    return portal;
  } else {
    return null;
  }
};

export default Modal;
