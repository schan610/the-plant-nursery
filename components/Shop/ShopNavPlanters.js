const ShopNavPlanters = (props) => {
  // update filters by props.checkFilters in shop component
  const checkboxHandler = (e) => {
    props.filtersHandler(e);
  };

  return (
    <nav>
      <ul className="shop__sidebar__list-filter">
        <li className="shop__sidebar__item">
          <input
            type="checkbox"
            onChange={checkboxHandler}
            name={"planter"}
            checked={props.activeFilters.includes("planter") ? true : false}
          />
          Planters
        </li>
        <li className="shop__sidebar__item">
          <input
            type="checkbox"
            onChange={checkboxHandler}
            name={"plantStand"}
            checked={props.activeFilters.includes("plantStand") ? true : false}
          />
          Plant Stands
        </li>
      </ul>
    </nav>
  );
};
export default ShopNavPlanters;
