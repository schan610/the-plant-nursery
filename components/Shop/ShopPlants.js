import ProductOverview from "../ui/ProductOverview";

const ShopPlants = (props) => {
  return (
    <section className="shop">
      <div className="shop__container section-container">
        <h1 className="heading-secondary">Shop All Products</h1>
        <div className="shop__main">
          <aside className="shop__sidebar">
            <nav>
              <ul>
                <li className="text-primary">View Plants</li>
                <li className="text-primary">View Planters</li>
              </ul>
            </nav>
          </aside>
          <div className="shop__products">
            {props.products.map((product) => {
              return (
                <ProductOverview
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPlants;
