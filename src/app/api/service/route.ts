import dbConnect, { COLLECTION_NAME } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();

  const bookingCollection = await dbConnect(COLLECTION_NAME.BOOKING);
  const result = await bookingCollection.insertOne(body);

  return NextResponse.json(result);
};
