import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence } from "framer-motion";
import useModal from "../../hooks/use-modal";
import Modal from "../../ui/Modal";
import MobileModal from "./MobileModal";
import Link from "next/link";
const MobileNavigation = () => {
  const { showModal, onShowModal, onCloseModal } = useModal();

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <Modal onClose={onCloseModal}>
            <MobileModal onClose={onCloseModal} />
          </Modal>
        )}
      </AnimatePresence>
      <div className="navbar__mobile">
        <div className="navbar__mobile__btn">
          <RxHamburgerMenu onClick={onShowModal} />
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
