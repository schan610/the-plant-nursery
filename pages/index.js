import Head from "next/head";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import FeaturedItems from "../components/Home/FeaturedItems";
import Business from "../components/Home/Business";
import Testimonial from "../components/Home/Testimonial";
import { getFeatured } from "../helpers/api-product-util";
const HomePage = (props) => {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="JXaEwYB3vuwTw4xOifditGq-P15SEh9MBsA_fxa2OZU"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Plant Nursery</title>
        <meta
          name="description"
          content="A demo Plant Nursery website that sells and ships plants to your door"
        />
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
  const featuredProducts = await getFeatured();
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
