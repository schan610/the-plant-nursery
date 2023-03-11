import ShopLowMaintenance from "../../../components/Shop/ShopLowMaintenance";
const LowMaintenance = (props) => {
  return <ShopLowMaintenance products={props.products} />;
};

// TODO: Add error handling
export async function getStaticProps() {
  const response = await fetch(
    "http://localhost:3000/api/products/plants/?filter=lowMaintenance"
  );
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

export default LowMaintenance;
