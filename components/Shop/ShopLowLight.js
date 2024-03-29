import ShopSection from "../ui/ShopSection";
import ProductOverview from "../ui/ProductOverview";
import ShopSort from "./ShopSort";
import useFilters from "../hooks/use-filters";
import RouteNavigation from "../ui/RouteNavigation";

const ShopLowLight = (props) => {
  // State handles current display of products

  const { sortHandler, products } = useFilters(props.products);
  const updateSortHandler = (curSort) => {
    sortHandler(curSort);
  };
  return (
    <ShopSection>
      <div className="shop__heading">
        <div>
          <h2 className="heading-secondary">Low-Light Plants</h2>
          <p>
            Space lacking ideal light conditions? Browse all of our low-light
            level plants for when you want to spruce up areas with little
            natural light.
          </p>
        </div>
      </div>
      <ShopSort sortedHandler={updateSortHandler} />
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

export default ShopLowLight;
