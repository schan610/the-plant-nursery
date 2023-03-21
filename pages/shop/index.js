import ShopAll from "../../components/Shop/ShopAll";
import { getAllProducts } from "../../helpers/api-product-util";
const ProductsPage = (props) => {
  return <ShopAll products={props.products} />;
};

// TODO: Add error handling

export async function getStaticProps() {
  const allProducts = await getAllProducts();
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
