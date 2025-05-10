"use server";

import dbConnect, { COLLECTION_NAME } from "@/lib/dbConnect";

export const loginUser = async (payload: {
  email: string;
  password: string;
}) => {
  const userCollection = await dbConnect(COLLECTION_NAME.USERS);
  const existingUser = await userCollection.findOne({ email: payload.email });

  if (!existingUser) {
    return { success: false, message: "User not found!" };
  }

  if (existingUser.password !== payload.password) {
    return { success: false, message: "Incorrect password!" };
  }

  return { success: true, user: existingUser };
};
