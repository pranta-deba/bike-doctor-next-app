import { NextResponse } from "next/server";

export const middleware = (req: Request) => {
  NextResponse.next();
};
