import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";

import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    // get the userId from the auth function
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Not Authorized!", { status: 401 });
    }
    // connect to the database
    await connectToDB();
    // find the user by clerkId
    const user = await User.findOne({ clerkId: userId });
    // if the user is not found, return a 404 status
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }
    // destruct the productId from the request body
    const { productId } = await req.json();

    if (!productId) {
      return new NextResponse("Product Id required", { status: 400 });
    }

    const isLiked = user.wishlist.includes(productId);

    if (isLiked) {
      // filter out the product id from the wishlist
      user.wishlist = user.wishlist.filter((id: string) => id !== productId);
    } else {
      // add the product id to the wishlist
      user.wishlist.push(productId);
    }

    await user.save();

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.log("[wishList_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
