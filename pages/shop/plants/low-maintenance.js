import ShopLowMaintenance from "../../../components/Shop/ShopLowMaintenance";
import { getPlants } from "../../../helpers/api-product-util";
const LowMaintenance = (props) => {
  return <ShopLowMaintenance products={props.products} />;
};

// TODO: Add error handling
export async function getStaticProps() {
  const plants = await getPlants("lowMaintenance");
  return {
    props: {
      products: plants.map((product) => {
        return {
          ...product,
          id: product._id.toString(),
          _id: null,
        };
      }),
    },
  };
}

export default LowMaintenance;
