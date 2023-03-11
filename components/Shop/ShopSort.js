import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// This component handles dropdown and sorting UI and returns current sorting method.
const ShopSort = (props) => {
  const router = useRouter();

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [curSortName, setCurSortName] = useState("Sort by Featured");
  const dropdownHandler = () => {
    setDropdownVisible((prevState) => !prevState);
  };
  const clickHandler = (e) => {
    dropdownHandler();
    if (curSortName === e.target.name) return;
    setCurSortName(e.target.name);
    props.sortedHandler(e.target.id);
  };

  // Reset sort whenever a filter has changed.
  useEffect(() => {
    setCurSortName("Sort by Featured");
  }, [router.query]);

  return (
    <div className="shop__sort shop__sort-mobile">
      <button
        className=" shop__sort__btn shop__sort__btn--active"
        onClick={dropdownHandler}
      >
        {curSortName}
        {dropdownVisible ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </button>
      {dropdownVisible && (
        <ul className="shop__sort__dropdown">
          <li>
            <button
              className=" shop__sort__btn shop__sort__dropdown--item"
              name="Sort by Featured"
              onClick={clickHandler}
              id="featured"
            >
              Sort by Featured
            </button>
          </li>
          <li>
            <button
              className=" shop__sort__btn shop__sort__dropdown--item"
              name="Sort by Price: High to Low"
              onClick={clickHandler}
              id="priceHighLow"
            >
              Sort by Price: High to Low
            </button>
          </li>
          <li>
            <button
              className=" shop__sort__btn shop__sort__dropdown--item"
              name="Sort by Price: Low to High"
              onClick={clickHandler}
              id="priceLowHigh"
            >
              Sort by Price: Low to High
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ShopSort;
