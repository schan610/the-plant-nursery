const ShopNavPlanters = (props) => {
  let activeFilters = "";
  if (props.filterQuery.features) {
    activeFilters = props.filterQuery.features;
  }
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
            checked={activeFilters.includes("planter") ? true : false}
          />
          Planters
        </li>
        <li className="shop__sidebar__item">
          <input
            type="checkbox"
            onChange={checkboxHandler}
            name={"plantStand"}
            checked={activeFilters.includes("plantStand") ? true : false}
          />
          Plant Stands
        </li>
      </ul>
    </nav>
  );
};
export default ShopNavPlanters;
