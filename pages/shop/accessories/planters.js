import ShopPlanters from "../../../components/Shop/ShopPlanters";

const Planters = (props) => {
  return <ShopPlanters products={props.products} />;
};

// TODO: Add error handling
export async function getStaticProps() {
  const response = await fetch(
    "http://localhost:3000/api/products/accessories?filter=planter"
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
export default Planters;
