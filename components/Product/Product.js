// import ProductDetails

import ProductDetails from "./ProductDetails";
import Image from "next/image";
const Product = (props) => {
  const product = props.product;
  const cartHandler = (product) => {
    //dispatch product to cart in here
    console.log(product);
  };

  return (
    <section className="product">
      <div className="section-container product__container">
        <div className="product__img">
          <Image
            src={product.image}
            alt={product.name}
            width={710}
            height={900}
            quality={100}
            priority={true}
          />
          <span>
            Image from Unsplash thanks to &nbsp;
            <a href="https://feey.ch" target="blank">
              feey
            </a>
          </span>
        </div>
        <ProductDetails product={product} addToCart={cartHandler} />
      </div>
    </section>
  );
};

export default Product;
