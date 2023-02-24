import Link from "next/link";
import { useState } from "react";
import ProductOverview from "../ui/ProductOverview";
import ShopSection from "../ui/ShopSection";
import ShopSort from "./ShopSort";
import { sortProducts } from "../helpers/sort";

const ShopAll = (props) => {
  // State handles current display of products
  const [curProducts, setCurProducts] = useState(props.products);
  console.log(curProducts);
  // Handles sorting and updates display
  const sortHandler = (curSort) => {
    const sortedProducts = sortProducts(curProducts, curSort);
    setCurProducts(sortedProducts);
  };

  return (
    <ShopSection>
      <div className="shop__heading">
        <h1 className="heading-secondary">Shop All Products</h1>
        <ShopSort sortedHandler={sortHandler} />
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
          {curProducts.map((product) => {
            return <ProductOverview key={product.id} product={product} />;
          })}
        </div>
      </div>
    </ShopSection>
  );
};

export default ShopAll;
