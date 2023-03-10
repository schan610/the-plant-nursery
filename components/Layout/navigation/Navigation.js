import Link from "next/link";
import NavDropdown from "../../ui/NavDropdown";
import ShopNavigation from "./ShopNavigation";
import AboutNavigation from "./AboutNavigation";
import MobileNavigation from "./MobileNavigation";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import Modal from "../../ui/Modal";
import CartModal from "../../Cart/CartModal";
import useModal from "../../hooks/use-modal";
import useDropdown from "../../hooks/use-dropdown";

const Navigation = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const { showModal, onShowModal, onCloseModal } = useModal();

  const { dropdownState, openDropdown, closeDropdown } = useDropdown(showModal);

  const clickHandler = (e) => {
    // Whenever a user clicks a link, dropdown closes
    if (e.target.tagName === "A") closeDropdown();
  };

  return (
    <div onMouseLeave={closeDropdown} onClick={clickHandler}>
      <AnimatePresence>
        {showModal && (
          <Modal show={showModal} onClose={onCloseModal}>
            <CartModal onClose={onCloseModal} />
          </Modal>
        )}
      </AnimatePresence>

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
          <MobileNavigation />
          <div className="navbar__brand">
            <div className="navbar__brand__logo">
              <Link href="/">
                Plant Nursery <FaLeaf />
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
