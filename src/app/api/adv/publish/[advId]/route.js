import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import User from "@/models/User";
import connectDB from "@/utils/ConnectDB";
import Advertisement from "@/models/Advertisement";

export async function PATCH(req, context) {
  try {
    await connectDB();

    const id = context.params.advId;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید",
        },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        {
          error: "حساب کاربری یافت نشد",
        },
        { status: 404 }
      );
    }
    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "دسترسی محدود" },
        {
          status: 403,
        }
      );
    }

    const adv = await Advertisement.findOne({ _id: id });
    adv.published = true;
    adv.save();

    return NextResponse.json({ message: "آگهی منتشر شد" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
