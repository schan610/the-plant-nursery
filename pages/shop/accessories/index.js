import ShopAccessories from "../../../components/Shop/ShopAccessories";

const AccessoriesPage = (props) => {
  return <ShopAccessories products={props.products} />;
};
export async function getStaticProps() {
  const response = await fetch(
    "http://localhost:3000/api/products/accessories"
  );
  const planters = await response.json();

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
export default AccessoriesPage;
