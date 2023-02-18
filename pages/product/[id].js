import ProductDetails from "../../components/Product/ProductDetails";
import { useRouter } from "next/router";
const ProductDetailsPage = (props) => {
  return <ProductDetails product={props.product} />;
};

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/products");
  const allProducts = await response.json();

  const paths = allProducts.map((product) => {
    return product._id.toString();
  });

  return {
    fallback: false,
    paths: paths.map((pathId) => ({
      params: { id: pathId },
    })),
  };
}
export async function getStaticProps(context) {
  const productId = context.params.id;
  const response = await fetch(
    `http://localhost:3000/api/products/${productId}`
  );
  const product = await response.json();

  return {
    props: {
      product: product,
    },
  };
}
export default ProductDetailsPage;
