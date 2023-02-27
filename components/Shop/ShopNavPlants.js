const ShopNavPlants = (props) => {
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
            name={"petFriendly"}
            checked={props.activeFilters.includes("petFriendly") ? true : false}
          />
          Pet-Friendly
        </li>
        <li className="shop__sidebar__item">
          <input
            type="checkbox"
            onChange={checkboxHandler}
            name={"lowLight"}
            checked={props.activeFilters.includes("lowLight") ? true : false}
          />
          Low-Light
        </li>
        <li className="shop__sidebar__item">
          <input
            type="checkbox"
            onChange={checkboxHandler}
            name={"lowMaintenance"}
            checked={
              props.activeFilters.includes("lowMaintenance") ? true : false
            }
          />
          Low-Maintenance
        </li>
      </ul>
    </nav>
  );
};
export default ShopNavPlants;
