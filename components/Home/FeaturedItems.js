// FEATURE 6 ITEMS
import ProductOverview from "../ui/ProductOverview";
const FeaturedItems = (props) => {
  return (
    <section className="featured">
      <div className="featured__container section-container">
        <h1 className="heading-secondary">Featured Items</h1>

        <ul className="featured__carousel">
          {props.featuredProducts.map((product) => {
            return (
              <ProductOverview
                key={product.id}
                name={product.name}
                image={product.image}
                id={product.id}
                price={product.price}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedItems;
