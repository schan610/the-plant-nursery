import ProductOverview from "../ui/ProductOverview";
import { useState, useEffect } from "react";
import Link from "next/link";
import ShopNavPlanters from "./ShopNavPlanters";
import ShopSort from "./ShopSort";
import { sortProducts } from "../helpers/sort";
import { useRouter } from "next/router";

const ShopPlanters = (props) => {
  const [filters, setFilters] = useState(props.products);
  console.log(filters);
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
          console.log(product, toArray);
          const bool = toArray.map((fitlerName) => product[fitlerName]);
          return bool.every((item) => item);
        });
        setFilters(sortProducts(filteredItems, "featured"));
        return;
      }

      return setFilters(sortProducts(props.products, "featured"));
    }

    setFilters(props.products);
  }, [router.isReady, router.query]);
  return (
    <section className="shop">
      <div className="shop__container section-container">
        <div className="shop__heading">
          <h1 className="heading-secondary">Shop All Products</h1>
          <ShopSort sortedHandler={sortHandler} />
        </div>
        <div className="shop__main">
          <aside className="shop__sidebar">
            <ShopNavPlanters />
          </aside>
          <div className="shop__products">
            {filters.length !== 0 &&
              filters.map((product) => {
                return <ProductOverview key={product.id} product={product} />;
              })}

            {filters.length === 0 && <p>No products available</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPlanters;
