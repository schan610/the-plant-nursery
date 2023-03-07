import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdClose,
} from "react-icons/md";
import { motion, easeIn, easeOut } from "framer-motion";
import { useState } from "react";
const MobileModal = (props) => {
  const [showPlants, setShowPlants] = useState(false);
  const [showAccessories, setShowAccessories] = useState(false);
  return (
    <motion.div
      className="mobile-modal"
      initial={{ x: "-100%" }}
      animate={{
        x: 0,
        transition: {
          duration: 0.3,
          type: easeIn,
        },
      }}
      exit={{
        x: "-100%",
        transition: {
          duration: 0.3,
          type: easeOut,
        },
      }}
    >
      <button
        className=" mobile-modal__heading  mobile-modal__close "
        onClick={props.onClose}
      >
        <MdClose />
      </button>
      <button
        className="mobile-modal__heading"
        onClick={() => setShowPlants((prevState) => !prevState)}
      >
        Plants
        {showPlants ? (
          <MdOutlineKeyboardArrowUp />
        ) : (
          <MdOutlineKeyboardArrowDown />
        )}
      </button>
      {showPlants && (
        <div className="mobile-modal__shop">
          <ul>
            <li>Pet-Friendly</li>
            <li>Low-Light</li>
            <li>Low-Maintenance</li>
            <li>View All</li>
          </ul>
        </div>
      )}
      <button
        className="mobile-modal__heading"
        onClick={() => setShowAccessories((prevState) => !prevState)}
      >
        Accessories{" "}
        {showAccessories ? (
          <MdOutlineKeyboardArrowUp />
        ) : (
          <MdOutlineKeyboardArrowDown />
        )}
      </button>
      {showAccessories && (
        <div className="mobile-modal__shop">
          <ul>
            <li>Plant Stands</li>
            <li>Pots</li>
            <li>View all</li>
          </ul>
        </div>
      )}
      <a href="#" className="mobile-modal__heading">
        Our Business
      </a>
      <a href="#" className="mobile-modal__heading">
        Visit us
      </a>
      <a href="#" className="mobile-modal__heading">
        Support
      </a>
    </motion.div>
  );
};

export default MobileModal;
