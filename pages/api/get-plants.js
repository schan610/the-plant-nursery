import { MongoClient } from "mongodb";
import { MONGO_URI } from "../../config";
// /api/get-products
// Gets all plants from database

async function handler(req, res) {
  const client = await MongoClient.connect(MONGO_URI);
  const db = client.db("the-plant-nursery-products");
  const plantCollections = await db.collection("plants").find().toArray();
  client.close();
  res.send(plantCollections);
}

export default handler;
