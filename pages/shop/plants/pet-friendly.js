import ShopPetFriendly from "../../../components/Shop/ShopPetFriendly";
import { getPlants } from "../../../helpers/api-product-util";
const PetFriendly = (props) => {
  return <ShopPetFriendly products={props.products} />;
};

// TODO: Add error handling
export async function getStaticProps() {
  const plants = await getPlants("petFriendly");
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

export default PetFriendly;
