import { MongoClient } from "mongodb";
import { MONGO_URI } from "../config";

export const getAllProducts = async () => {
  const client = await MongoClient.connect(MONGO_URI);
  const db = client.db("the-plant-nursery-products");
  const plantCollections = await db.collection("plants").find().toArray();
  const accessoriesCollections = await db
    .collection("accessories")
    .find()
    .toArray();
  client.close();
  const allProducts = [...plantCollections, ...accessoriesCollections];

  return allProducts;
};

export const getProduct = async (productId) => {
  const allProducts = await getAllProducts();
  const product = allProducts.find(
    (product) => product._id.toString() === productId
  );
  return product;
};

export const getAccessories = async (filter = undefined) => {
  const client = await MongoClient.connect(MONGO_URI);
  const db = client.db("the-plant-nursery-products");
  const accessoriesCollections = await db
    .collection("accessories")
    .find()
    .toArray();

  if (filter) {
    const filteredCollections = await db
      .collection("accessories")
      .find({ [filter]: true })
      .toArray();
    client.close();
    return filteredCollections;
  }

  client.close();
  return accessoriesCollections;
};

export const getPlants = async (filter = undefined) => {
  const client = await MongoClient.connect(MONGO_URI);
  const db = client.db("the-plant-nursery-products");
  const plantCollections = await db.collection("plants").find().toArray();

  if (filter) {
    const filteredCollections = await db
      .collection("plants")
      .find({ [filter]: true })
      .toArray();
    client.close();
    return filteredCollections;
  }

  client.close();
  return plantCollections;
};

export const getFeatured = async () => {
  const allProducts = await getAllProducts();
  const featuredProducts = allProducts.filter(
    (product) => product.featured === true
  );
  return featuredProducts;
};
