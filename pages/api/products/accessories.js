import { MongoClient } from "mongodb";
import { MONGO_URI } from "../../../config";
// /api/get-products
// Gets all plants from database

async function handler(req, res) {
  const client = await MongoClient.connect(MONGO_URI);
  const db = client.db("the-plant-nursery-products");

  if (req.query.filter) {
    const filter = req.query.filter;
    console.log(filter);
    const filteredCollections = await db
      .collection("accessories")
      .find({ [filter]: true })
      .toArray();
    console.log(filteredCollections);
    client.close();
    res.send(filteredCollections);
    return;
  }

  const accessoriesCollections = await db
    .collection("accessories")
    .find()
    .toArray();

  client.close();

  res.send(accessoriesCollections);
}

export default handler;
