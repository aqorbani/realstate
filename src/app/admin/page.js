import connectDB from "@/utils/ConnectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";

export default async function page() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }

  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") {
    redirect("/dashboard");
  }
  return <div>page</div>;
}
