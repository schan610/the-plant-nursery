import Link from "next/link";
import { useReducer, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import NavDropdown from "../../ui/NavDropdown";
import ShopNavigation from "./ShopNavigation";
import AboutNavigation from "./AboutNavigation";
import CartModal from "../../Cart/CartModal";
import Modal from "../../ui/Modal";

//TODO:  Might refactor dropdown reducer to a customhook
const dropdownReducer = (state, action) => {
  if (action.type === "openShop") {
    return {
      shopDropdown: true,
      aboutDropdown: false,
    };
  }
  if (action.type === "openAbout") {
    return {
      shopDropdown: false,
      aboutDropdown: true,
    };
  }
  if (action.type === "closeAll") {
    return {
      shopDropdown: false,
      aboutDropdown: false,
    };
  }
  return state;
};

const Navigation = () => {
  const [dropdownState, dispatch] = useReducer(dropdownReducer, {
    shopDropdown: false,
    aboutDropdown: false,
  });

  const [showModal, setShowModal] = useState(false);

  const onCloseModal = () => {
    document.body.style.overflow = "auto"; // ADD THIS LINE
    document.body.style.height = "auto"; // ADD THIS LINE
    setShowModal(false);
  };
  const openDropdown = (openDropdown) => {
    if (showModal) return;
    dispatch({ type: openDropdown });
  };

  const closeDropdown = () => {
    if (showModal) return;
    dispatch({ type: "closeAll" });
  };

  const clickHandler = (e) => {
    if (e.target.tagName === "A") closeDropdown();
  };

  return (
    <div onMouseLeave={closeDropdown} onClick={clickHandler}>
      {showModal && <Modal show={showModal} onClose={onCloseModal} />}
      <nav className="navbar">
        <div className="navbar__container section-container ">
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link href="/shop" onMouseEnter={() => openDropdown("openShop")}>
                Shop
              </Link>
            </li>
            <li className="navbar__item">
              <a href="#" onMouseEnter={() => openDropdown("openAbout")}>
                Explore
              </a>
            </li>
          </ul>
          <div className="navbar__brand">
            <div className="navbar__brand__logo">
              <Link href="/">
                The Plant Nursery <FaLeaf />
              </Link>
            </div>
          </div>
          <p className="navbar__cart" onClick={() => setShowModal(true)}>
            My Cart
          </p>
        </div>
      </nav>

      <AnimatePresence>
        {dropdownState.shopDropdown && (
          <NavDropdown
            style={!dropdownState.shopDropdown && { color: "blue" }}
            onAnimationEnd={() => {
              if (!dropdownState.shopDropdown) dispatch("closeAll");
            }}
          >
            <ShopNavigation />
          </NavDropdown>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {dropdownState.aboutDropdown && (
          <NavDropdown>
            <AboutNavigation />
          </NavDropdown>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
