import ShopPlantStands from "../../../components/Shop/ShopPlantStands";
import { getAccessories } from "../../../helpers/api-product-util";
const PlantStands = (props) => {
  return <ShopPlantStands products={props.products} />;
};

// TODO: Add error handling
export async function getStaticProps() {
  const plantStands = await getAccessories("plantStand");

  return {
    props: {
      products: plantStands.map((product) => {
        return {
          ...product,
          id: product._id.toString(),
          _id: null,
        };
      }),
    },
  };
}
export default PlantStands;
