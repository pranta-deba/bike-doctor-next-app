import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.DATABASE_URL as string;

export const COLLECTION_NAME = {
  SERVICES: "services",
  USERS: "users",
  BOOKING: "bookings",
};

const dbConnect = async (collectionName: string) => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_NAME).collection(collectionName);
};

export default dbConnect;
