import RouteNavigation from "./RouteNavigation";
const ShopSection = (props) => {
  return (
    <section className="shop">
      <div className="shop__container section-container">
        <RouteNavigation />
        {props.children}
      </div>
    </section>
  );
};
export default ShopSection;
