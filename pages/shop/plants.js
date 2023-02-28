import ShopPlants from "../../components/Shop/ShopPlants";
const PlantsPage = (props) => {
  return <ShopPlants products={props.products} />;
};

// TODO: Add error handling
export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/products/plants");
  const plants = await response.json();
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
