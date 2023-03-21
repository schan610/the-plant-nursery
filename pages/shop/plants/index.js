import ShopPlants from "../../../components/Shop/ShopPlants";
import { getPlants } from "../../../helpers/api-product-util";
const PlantsPage = (props) => {
  return <ShopPlants products={props.products} />;
};

export async function getStaticProps() {
  const plants = await getPlants();
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
export default PlantsPage;
