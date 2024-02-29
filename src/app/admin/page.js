import connectDB from "@/utils/ConnectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import DashboardSidebar from "@/layout/DashboardSidebar";
import AdminPage from "@/template/AdminPage";
import Advertisement from "@/models/Advertisement";

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

  const advertisements = await Advertisement.find({ published: false });

  return (
    <>
      <div className="w-full md:w-1/3 lg:w-1/5">
        <DashboardSidebar role={user.role} email={user.email} />
      </div>
      <div className="w-full md:w-2/3 lg:w-4/5">
        <AdminPage
          advertisements={JSON.parse(JSON.stringify(advertisements))}
        />
      </div>
    </>
  );
}
