import useFilters from "../hooks/use-filters";

const ShopNavPlants = () => {
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
            name={"petFriendly"}
            checked={filterStates.includes("petFriendly") ? true : false}
          />
          Pet-Friendly
        </li>
        <li className="shop__sidebar__item">
          <input
            type="checkbox"
            onChange={checkboxHandler}
            name={"lowLight"}
            checked={filterStates.includes("lowLight") ? true : false}
          />
          Low-Light
        </li>
        <li className="shop__sidebar__item">
          <input
            type="checkbox"
            onChange={checkboxHandler}
            name={"lowMaintenance"}
            checked={filterStates.includes("lowMaintenance") ? true : false}
          />
          Low-Maintenance
        </li>
      </ul>
    </nav>
  );
};
export default ShopNavPlants;
