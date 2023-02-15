import { MongoClient } from "mongodb";
import { MONGO_URI } from "../../config";
// /api/get-products
// Gets ALL Products from databse

async function handler(req, res) {
  const client = await MongoClient.connect(MONGO_URI);
  const db = client.db("the-plant-nursery-products");
  const plantCollections = await db.collection("plants").find().toArray();
  const accessoriesCollections = await db
    .collection("accessories")
    .find()
    .toArray();

  const allProducts = [...plantCollections, ...accessoriesCollections];
  client.close();
  res.send(allProducts);
}

export default handler;
