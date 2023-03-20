import Product from "../../components/Product/Product";
const ProductDetailsPage = (props) => {
  return <Product product={props.product} />;
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
      product: { ...product, id: product._id.toString(), _id: null },
    },
  };
}
export default ProductDetailsPage;
