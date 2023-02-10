import Head from "next/head";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import FeaturedItems from "../components/Home/FeaturedItems";
import Business from "../components/Home/Business";
import Testimonial from "../components/Home/Testimonial";
const HomePage = () => {
  return (
    <>
      <Head>
        <title>The Plant Nursery</title>
      </Head>
      <Hero />
      <Features />
      <FeaturedItems />
      <Testimonial />
      <Business />
    </>
  );
};

export default HomePage;
