import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductOverview from "../ui/ProductOverview";
import ShopNavPlants from "./ShopNavPlants";
import ShopSort from "./ShopSort";
import { sortProducts } from "../helpers/sort";

const ShopPlants = (props) => {
  // State handles current display of products
  const [products, setProducts] = useState(
    sortProducts(props.products, "featured")
  );
  const router = useRouter();

  // Handles sorting and updates display
  const sortHandler = (curSort) => {
    const sortedProducts = sortProducts(products, curSort);
    setProducts(sortedProducts);
  };

  // Handles filtering data based on query changes
  useEffect(() => {
    // FILTER HERE
    if (router.isReady) {
      // checks if query 'features' for filtering exists to filter accordingly
      if (router.query?.features) {
        // convert query to an array and return filteredItems
        const toArray = router.query.features.split("&");
        const filteredItems = props.products.filter((product) => {
          const bool = toArray.map((fitlerName) => product[fitlerName]);
          return bool.every((item) => item);
        });

        // set current products display to filtered data
        setProducts(sortProducts(filteredItems, "featured"));
        return;
      }

      // if no filter query is found, return default
      setProducts(sortProducts(props.products, "featured"));
    }
  }, [router.isReady, router.query]);

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
