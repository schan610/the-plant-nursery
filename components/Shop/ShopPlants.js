import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductOverview from "../ui/ProductOverview";
import ShopNavPlants from "./ShopNavPlants";
import ShopSort from "./ShopSort";
import { sortProducts } from "../helpers/sort";
const ShopPlants = (props) => {
  // State handles current display of products
  const [filters, setFilters] = useState(props.products);
  const router = useRouter();

  // Handles sorting and updates display
  const sortHandler = (curSort) => {
    const sortedProducts = sortProducts(filters, curSort);
    setFilters(sortedProducts);
  };

  useEffect(() => {
    // FILTER HERE
    if (router.isReady) {
      // Code using query
      // use dataFetching

      // FILTER HOOK: checkes query
      const filterQuery = router.query?.features;
      if (filterQuery) {
        const toArray = filterQuery.split("&");
        const filteredItems = props.products.filter((product) => {
          const bool = toArray.map((fitlerName) => product[fitlerName]);
          return bool.every((item) => item);
        });
        setFilters(sortProducts(filteredItems, "featured"));

        return;
      }
    }
    return setFilters(sortProducts(props.products, "featured"));
  }, [router.isReady, router.query]);

  // Takes care of sorting method

  return (
    <section className="shop">
      <div className="shop__container section-container">
        <div className="shop__heading">
          <h1 className="heading-secondary">Shop Plants</h1>
          <ShopSort sortedHandler={sortHandler} />
        </div>
        <div className="shop__main">
          <aside className="shop__sidebar">
            <ShopNavPlants />
          </aside>

          <div className="shop__products">
            {filters.map((product) => {
              return <ProductOverview key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPlants;
