import ShopNavPlanters from "./ShopNavPlanters";
import ShopNavPlants from "./ShopNavPlants";

const ShopNavAll = (props) => {
  return (
    <div>
      <ShopNavPlants
        filterQuery={props.filterQuery}
        filtersHandler={props.filtersHandler}
      />

      <ShopNavPlanters
        filterQuery={props.filterQuery}
        filtersHandler={props.filtersHandler}
      />
    </div>
  );
};

export default ShopNavAll;
