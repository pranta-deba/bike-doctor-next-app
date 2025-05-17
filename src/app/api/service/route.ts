import { authOptions } from "@/lib/authOptions";
import dbConnect, { COLLECTION_NAME } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const session = await getServerSession({ req, ...authOptions });

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const email = session.user?.email as string;
  const bookingCollection = await dbConnect(COLLECTION_NAME.BOOKING);
  const result = await bookingCollection.find({ email }).toArray();
  return NextResponse.json(result);
};

export const POST = async (req: Request) => {
  const body = await req.json();

  const bookingCollection = await dbConnect(COLLECTION_NAME.BOOKING);
  const result = await bookingCollection.insertOne(body);

  return NextResponse.json(result);
};
