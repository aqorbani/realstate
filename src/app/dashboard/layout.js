import DashboardSidebar from "@/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 lg:w-1/5">
        <DashboardSidebar />
      </div>
      <div className="w-full md:w-2/3 lg:w-4/5">{children}</div>
    </div>
  );
}
