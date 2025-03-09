import connectDB from "@/config/db";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
// import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { userId } = getAuth(request);
        if (!userId) {
            return NextResponse.json({ success: false, message: "Unauthorized: No userId found" }, { status: 401 });
        }

        const { cartData } = await request.json();
        await connectDB();

        const user = await User.findById(userId);

        user.cartItems = cartData;
        await user.save();

        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: error.message });
    }
}
