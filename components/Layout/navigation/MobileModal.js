import Link from "next/link";
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
      <div className="mobile-modal__wrapper">
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
              <li>
                <Link href={`/shop/plants/pet-friendly`}>Pet-Friendly</Link>
              </li>
              <li>
                <Link href={`/shop/plants/low-light`}>Low-Light</Link>
              </li>
              <li>
                <Link href={`/shop/plants/low-maintenance`}>
                  Low-Maintenance
                </Link>
              </li>
              <li>
                <Link href={`/shop/plants`}>View All</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="mobile-modal__wrapper">
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
              <li>
                <Link href={`/shop/accessories`}>View All</Link>
              </li>
            </ul>
          </div>
        )}{" "}
      </div>
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
