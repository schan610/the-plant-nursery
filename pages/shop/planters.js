import ShopPlanters from "../../components/Shop/ShopPlanters";

const PlantersPage = (props) => {
  return <ShopPlanters products={props.products} />;
};
export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/products/planters");
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
export default PlantersPage;
