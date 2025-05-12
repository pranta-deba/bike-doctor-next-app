import dbConnect, { COLLECTION_NAME } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const collection = await dbConnect(COLLECTION_NAME.SERVICES);
  const service = await collection.findOne({
    _id: new ObjectId(id),
  });

  return NextResponse.json(service);
};
