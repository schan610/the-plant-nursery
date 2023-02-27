import ProductOverview from "../ui/ProductOverview";
import ShopNavPlanters from "./ShopNavPlanters";
import ShopSort from "./ShopSort";
import useFilters from "../hooks/use-filters";

const ShopPlanters = (props) => {
  const { checkFilters, sortHandler, activeFilters, products } = useFilters(
    props.products
  );
  console.log(products);

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
          <h1 className="heading-secondary">Shop All Products</h1>
          <ShopSort sortedHandler={updateSortHandler} />
        </div>
        <div className="shop__main">
          <aside className="shop__sidebar">
            <ShopNavPlanters
              activeFilters={activeFilters}
              filtersHandler={updateFiltersHandler}
            />
          </aside>
          <div className="shop__products">
            {products.length !== 0 &&
              products.map((product) => {
                return <ProductOverview key={product.id} product={product} />;
              })}

            {products.length === 0 && <p>No products available</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPlanters;
