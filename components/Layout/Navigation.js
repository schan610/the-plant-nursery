import { FaLeaf } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__list">
          <li className="navbar__item">
            <a href="#">Shop</a>
          </li>
          <li className="navbar__item">
            <a href="#">Explore</a>
          </li>
        </ul>
        <div className="navbar__logo">
          The Plant Nursery <FaLeaf />
        </div>
        <p className="navbar__cart">My Cart</p>
      </div>
    </nav>
  );
};

export default Navigation;
