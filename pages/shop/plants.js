const PlantsPage = (props) => {
  return <h1>Plants Page</h1>;
};

// TODO: Add error handling
export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/get-plants");
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
