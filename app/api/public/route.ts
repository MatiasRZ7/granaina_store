import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const publicData = {
      message: "Welcome to Riviera Maya Tour API",
      info: "This is a public endpoint that provides general information.",
    };

    return NextResponse.json(publicData, { status: 200 });
  } catch (err) {
    console.log("[public_GET]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
