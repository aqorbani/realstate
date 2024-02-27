import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import MyAdvPage from "@/template/MyAdvPage";
import { getServerSession } from "next-auth";

export default async function page() {
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "advertisements",
        foreignField: "userId",
        localField: "_id",
        as: "advertisements",
      },
    },
  ]);
  return <MyAdvPage advertisements={user.advertisements} />;
}
