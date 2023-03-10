const ShopNavPlants = (props) => {
  let activeFilters = "";
  if (props.filterQuery.features) {
    activeFilters = props.filterQuery.features;
  }
  const checkboxHandler = (e) => {
    props.filtersHandler(e);
  };

  return (
    <>
      <h3 className="heading-tertiary">Plants</h3>
      <ul className="shop__sidebar__list-filter">
        <li className="shop__sidebar__item">
          <input
            type="checkbox"
            onChange={checkboxHandler}
            name={"petFriendly"}
            checked={activeFilters.includes("petFriendly") ? true : false}
          />
          Pet-Friendly
        </li>
        <li className="shop__sidebar__item">
          <input type="checkbox" onChange={checkboxHandler} name={"lowLight"} />
          Low-Light
        </li>
        <li className="shop__sidebar__item">
          <input
            type="checkbox"
            onChange={checkboxHandler}
            name={"lowMaintenance"}
            checked={activeFilters.includes("lowMaintenance") ? true : false}
          />
          Low-Maintenance
        </li>
      </ul>
    </>
  );
};
export default ShopNavPlants;
