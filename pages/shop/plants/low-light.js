import ShopLowLight from "../../../components/Shop/ShopLowLight";
const LowLight = (props) => {
  return <ShopLowLight products={props.products} />;
};

// TODO: Add error handling
export async function getStaticProps() {
  const response = await fetch(
    "http://localhost:3000/api/products/plants/?filter=lowLight"
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

export default LowLight;
