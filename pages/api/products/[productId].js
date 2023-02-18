import { MongoClient } from "mongodb";
import { MONGO_URI } from "../../../config";
// /api/get-products
// Gets SINGLE product

async function handler(req, res) {
  const response = await fetch("http://localhost:3000/api/products");
  const allProducts = await response.json();
  const product = allProducts.find(
    (product) => product._id.toString() === req.query.productId
  );

  res.send(product);
}

export default handler;
