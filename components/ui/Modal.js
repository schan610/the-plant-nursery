import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, easeIn, easeOut } from "framer-motion";

const Modal = ({ onClose, children }) => {
  const [domReady, setDomReady] = useState(false);
  const backDropRef = useRef();

  const backDropHandler = useCallback(
    (e) => {
      console.log(`changes`);
      if (e.target !== backDropRef.current) return;
      if (backDropRef?.current?.contains(e.target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setDomReady(true);
    // attach event listener to the whole window with our handler
    window.addEventListener("click", backDropHandler);
    // remove the event listener when the modal is closed
    return () => window.removeEventListener("click", backDropHandler);
  }, [backDropHandler]);

  const modalContent = (
    <motion.div
      className="backdrop"
      ref={backDropRef}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
          type: easeIn,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.3,
          type: easeOut,
        },
      }}
    >
      {children}
    </motion.div>
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
