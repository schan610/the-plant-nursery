import ShopLowLight from "../../../components/Shop/ShopLowLight";
import { getPlants } from "../../../helpers/api-product-util";
const LowLight = (props) => {
  return <ShopLowLight products={props.products} />;
};

// TODO: Add error handling
export async function getStaticProps() {
  const plants = await getPlants("lowLight");

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

export default LowLight;
