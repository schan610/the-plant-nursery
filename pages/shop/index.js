import ShopAll from "../../components/Shop/ShopAll";

const ProductsPage = (props) => {
  return <ShopAll products={props.products} />;
};

// TODO: Add error handling

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/products");
  const allProducts = await response.json();

  return {
    props: {
      products: allProducts.map((product) => {
        return {
          ...product,
          id: product._id.toString(),
          _id: null,
        };
      }),
    },
  };
}

export default ProductsPage;
