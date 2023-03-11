import ShopSection from "../ui/ShopSection";
import ProductOverview from "../ui/ProductOverview";
import ShopSort from "./ShopSort";
import useFilters from "../hooks/use-filters";
const ShopLowMaintenance = (props) => {
  // State handles current display of products

  const { sortHandler, products } = useFilters(props.products);
  const updateSortHandler = (curSort) => {
    sortHandler(curSort);
  };
  return (
    <ShopSection>
      <div className="shop__heading">
        <h2 className="heading-secondary">Low-Maintenance Plants</h2>
        <ShopSort sortedHandler={updateSortHandler} />
      </div>
      <div className="shop__main">
        <div className="shop__products">
          {products.map((product) => {
            return <ProductOverview key={product.id} product={product} />;
          })}
        </div>
      </div>
    </ShopSection>
  );
};

export default ShopLowMaintenance;
