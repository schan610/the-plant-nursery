import Link from "next/link";

import { AnimatePresence } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import NavDropdown from "../../ui/NavDropdown";
import ShopNavigation from "./ShopNavigation";
import AboutNavigation from "./AboutNavigation";
import Modal from "../../ui/Modal";
import { useSelector } from "react-redux";
import useModal from "../../hooks/use-modal";
import useDropdown from "../../hooks/use-dropdown";

const Navigation = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const { showModal, onShowModal, onCloseModal } = useModal();
  const { dropdownState, openDropdown, closeDropdown } = useDropdown(showModal);

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

          <div className="navbar__cart" onClick={() => onShowModal()}>
            <p>My Cart</p>
            {cartQuantity !== 0 && (
              <span className="navbar__cart__quantity">{`(${cartQuantity})`}</span>
            )}
          </div>
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
