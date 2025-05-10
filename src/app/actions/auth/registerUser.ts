"use server";

import dbConnect, { COLLECTION_NAME } from "@/lib/dbConnect";

export const registerUser = async (payload: {
  name: string;
  email: string;
  password: string;
}) => {
  const userCollection = await dbConnect(COLLECTION_NAME.USERS);

  const existingUser = await userCollection.findOne({ email: payload.email });

  if (!existingUser) {
    const result = await userCollection.insertOne(payload);

    return {
      success: true,
      result: {
        acknowledged: result.acknowledged,
        insertedId: result.insertedId.toString(), 
      },
    };
  }

  return { success: false, message: "User already exists" };
};
