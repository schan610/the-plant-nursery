import Link from "next/link";
import ProductOverview from "../ui/ProductOverview";
import ShopSection from "../ui/ShopSection";
import ShopSort from "./ShopSort";

import useFilters from "../hooks/use-filters";

const ShopAll = (props) => {
  // State handles current display of products
  const { sortHandler, products } = useFilters(props.products);
  // Handles sorting and updates display
  const updateSortHandler = (curSort) => {
    sortHandler(curSort);
  };

  return (
    <ShopSection>
      <div className="shop__heading">
        <h1 className="heading-secondary">Shop All Products</h1>
        <ShopSort sortedHandler={updateSortHandler} />
      </div>
      <div className="shop__main">
        <aside className="shop__sidebar">
          <nav>
            <ul>
              <li className="text-primary">
                <Link href="/shop/plants">View Plants</Link>
              </li>
              <li className="text-primary">
                <Link href="/shop/planters">View Planters</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="shop__products">
          {products.map((product) => {
            return <ProductOverview key={product.id} product={product} />;
          })}
        </div>
      </div>
    </ShopSection>
  );
};

export default ShopAll;
