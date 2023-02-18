import { BsCheckCircle, BsXCircle, BsDot } from "react-icons/bs";

const ProductFeatures = (props) => {
  return (
    <div className="product-features">
      <h2 className="heading-secondary">Features: </h2>
      <ul className="product-features__list">
        <li>
          <BsDot />
          <span>Pet Friendly</span>
          {props.petFriendly ? (
            <BsCheckCircle className={`product-features__list__true`} />
          ) : (
            <BsXCircle className="product-features__list__false" />
          )}
        </li>
        <li>
          <BsDot />
          <span>Low Maintenance </span>
          {props.lowMaintenance ? (
            <BsCheckCircle className={`product-features__list__true`} />
          ) : (
            <BsXCircle className="product-features__list__false" />
          )}
        </li>
        <li>
          <BsDot />
          <span>Low Light</span>
          {props.lowLight ? (
            <BsCheckCircle className={`product-features__list__true`} />
          ) : (
            <BsXCircle className="product-features__list__false" />
          )}
        </li>
      </ul>
    </div>
  );
};

export default ProductFeatures;
