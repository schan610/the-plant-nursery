import ShopAccessories from "../../../components/Shop/ShopAccessories";
import { getAccessories } from "../../../helpers/api-product-util";
const AccessoriesPage = (props) => {
  return <ShopAccessories products={props.products} />;
};
export async function getStaticProps() {
  // const response = await fetch(
  //   "http://localhost:3000/api/products/accessories"
  // );
  const accessories = await getAccessories();

  return {
    props: {
      products: accessories.map((product) => {
        return {
          ...product,
          id: product._id.toString(),
          _id: null,
        };
      }),
    },
  };
}
export default AccessoriesPage;
