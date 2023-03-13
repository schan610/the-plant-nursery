import ShopSection from "../ui/ShopSection";
import ProductOverview from "../ui/ProductOverview";
import ShopSort from "./ShopSort";
import useFilters from "../hooks/use-filters";
const ShopPetFriendly = (props) => {
  // State handles current display of products

  const { sortHandler, products } = useFilters(props.products);
  const updateSortHandler = (curSort) => {
    sortHandler(curSort);
  };
  return (
    <ShopSection>
      <div className="shop__heading">
        <div>
          <h2 className="heading-secondary">Pet-Friendly Plants</h2>
          <p>
            Browse all of our non-toxic, pet-friendly plant selections. Grow
            your plant collection all while keeping your pets safe, worry-free.
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

export default ShopPetFriendly;
