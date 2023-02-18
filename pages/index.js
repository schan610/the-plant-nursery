import Head from "next/head";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import FeaturedItems from "../components/Home/FeaturedItems";
import Business from "../components/Home/Business";
import Testimonial from "../components/Home/Testimonial";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>The Plant Nursery</title>
      </Head>
      <Hero />
      <Features />
      <FeaturedItems featuredProducts={props.featuredProducts} />
      <Testimonial />
      <Business />
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/products/featured");
  const featuredProducts = await response.json();
  return {
    props: {
      featuredProducts: featuredProducts.map((product) => {
        return {
          ...product,
          id: product._id.toString(),
          _id: null,
        };
      }),
    },
  };
}

export default HomePage;
