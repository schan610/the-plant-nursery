// FEATURE 6 ITEMS
import ProductOverview from "../ui/ProductOverview";
const FeaturedItems = () => {
  return (
    <section className="featured">
      <div className="featured__container section-container">
        <h1 className="heading-secondary">Featured Items</h1>

        <ul className="featured__carousel">
          <ProductOverview />
          <ProductOverview />
          <ProductOverview />
          <ProductOverview />
        </ul>
      </div>
    </section>
  );
};

export default FeaturedItems;
