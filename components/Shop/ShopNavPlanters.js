import useFilters from "../hooks/use-filters";

const ShopNavPlanters = (props) => {
  const { checkFilters, filterStates } = useFilters([]);

  const checkboxHandler = (e) => {
    checkFilters(e);
  };

  return (
    <nav>
      <ul className="shop__sidebar__list-filter">
        <li className="shop__sidebar__item">
          <input
            type="checkbox"
            onChange={checkboxHandler}
            name={"planter"}
            checked={filterStates.includes("planter") ? true : false}
          />
          Planters
        </li>
        <li className="shop__sidebar__item">
          <input
            type="checkbox"
            onChange={checkboxHandler}
            name={"plantStand"}
            checked={filterStates.includes("plantStand") ? true : false}
          />
          Plant Stands
        </li>
      </ul>
    </nav>
  );
};
export default ShopNavPlanters;
