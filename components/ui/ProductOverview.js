import Variations from "./Variations";

// Product name, price, image,

// If variations === true show component, if size === true show component.

const ProductOverview = (props) => {
  return (
    <li className="product-overview">
      <div className="product-overview__img">
        <img src={props.image} alt="Featured product" />
      </div>

      <div className="product-overview__info">
        <h3 className="product-overview__info__title heading-tertiary">
          {props.name}
        </h3>
        <span>${props.price}</span>
      </div>
      <Variations />
    </li>
  );
};

export default ProductOverview;
