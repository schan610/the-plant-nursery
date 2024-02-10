const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

export const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@the-plant-nursery.wespzuk.mongodb.net`;
