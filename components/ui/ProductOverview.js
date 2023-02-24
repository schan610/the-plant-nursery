import Variations from "./Variations";
import Link from "next/link";

// Product name, price, image,

// If variations === true show component, if size === true show component.

const ProductOverview = (props) => {
  const product = props.product;
  return (
    <li className="product-overview">
      <div className="product-overview__img">
        <Link href={`/product/${product.id}`}>
          <img src={product.image} alt="Product" />
        </Link>
      </div>

      <div className="product-overview__info">
        <Link href={`/product/${product.id}`}>
          <h3 className="product-overview__info__title heading-tertiary">
            {product.name}
          </h3>
        </Link>
        <span>${!product.sizes ? product.price : product.sizes.small}</span>
      </div>
      {product.variations && <Variations variations={product.variations} />}
    </li>
  );
};

export default ProductOverview;
