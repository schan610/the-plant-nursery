import ProductOverview from "../ui/ProductOverview";
import ShopNavPlants from "./ShopNavPlants";
import ShopSort from "./ShopSort";
import useFilters from "../hooks/use-filters";

const ShopPlants = (props) => {
  const { checkFilters, sortHandler, filterQuery, products } = useFilters(
    props.products
  );
  // State handles current display of products
  const updateFiltersHandler = (e) => {
    checkFilters(e);
  };
  // Handles sorting and updates display
  const updateSortHandler = (curSort) => {
    sortHandler(curSort);
  };

  return (
    <section className="shop">
      <div className="shop__container section-container">
        <div className="shop__heading">
          <h1 className="heading-secondary">Shop Plants</h1>
          <ShopSort sortedHandler={updateSortHandler} />
        </div>
        <div className="shop__main">
          <aside className="shop__sidebar">
            <ShopNavPlants
              filterQuery={filterQuery}
              filtersHandler={updateFiltersHandler}
            />
          </aside>

          <div className="shop__products">
            {products.map((product) => {
              return <ProductOverview key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPlants;
