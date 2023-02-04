import { useRouter } from "next/router";
const ProductDetails = () => {
  const router = useRouter();

  console.log(router.query.variant);
  return <h1>Product Details</h1>;
};

export default ProductDetails;
