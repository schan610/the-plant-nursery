import ShopPlanters from "../../../components/Shop/ShopPlanters";
import { getAccessories } from "../../../helpers/api-product-util";

const Planters = (props) => {
  return <ShopPlanters products={props.products} />;
};

// TODO: Add error handling
export async function getStaticProps() {
  const planters = await getAccessories("plantStand");

  return {
    props: {
      products: planters.map((product) => {
        return {
          ...product,
          id: product._id.toString(),
          _id: null,
        };
      }),
    },
  };
}
export default Planters;
