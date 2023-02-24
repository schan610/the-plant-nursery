const ShopSection = (props) => {
  return (
    <section className="shop">
      <div className="shop__container section-container">{props.children}</div>
    </section>
  );
};
export default ShopSection;
