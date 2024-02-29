import DashboardSidebar from "@/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/ConnectDB";
import User from "@/models/User";

export const metadata = {
  title: "پنل کاربری",
};

export default async function layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  await connectDB();
  const user = await User.findOne({ email: session.user.email });

  if (!user) {
    return (
      <p className="font-semibold text-base text-gray-600">
        هیچ آگهی ثبت نشده است.
      </p>
    );
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 lg:w-1/5">
        <DashboardSidebar role={user.role} email={user.email} />
      </div>
      <div className="w-full md:w-2/3 lg:w-4/5">{children}</div>
    </div>
  );
}
