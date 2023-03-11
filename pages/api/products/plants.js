import { MongoClient } from "mongodb";
import { MONGO_URI } from "../../../config";
// /api/get-products
// Gets all plants from database

async function handler(req, res) {
  const client = await MongoClient.connect(MONGO_URI);
  const db = client.db("the-plant-nursery-products");
  const plantCollections = await db.collection("plants").find().toArray();
  if (req.query.filter) {
    const filter = req.query.filter;
    const filteredCollections = await db
      .collection("plants")
      .find({ [filter]: true })
      .toArray();

    client.close();
    res.send(filteredCollections);
    return;
  }
  client.close();
  res.send(plantCollections);
}

export default handler;
