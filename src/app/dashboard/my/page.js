import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import { getServerSession } from "next-auth";

export default async function page() {
  const session = await getServerSession(authOptions);
  const [advertisements] = await User.aggregate([
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
  console.log(advertisements);
  return <div>page</div>;
}
