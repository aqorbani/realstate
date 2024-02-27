import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  return (
    <div className="p-5">
      <header className="flex justify-around">
        <div className="flex flex-col justify-center items-center p-2 m-2 shadow-md rounded w-1/5 min-h-28">
          <p className="font-semibold text-lg">تاریخ عضویت</p>
          <p>محتوا</p>
        </div>
        <div className="flex flex-col justify-center items-center p-2 m-2 shadow-md rounded w-1/5 min-h-28">
          <p className="font-semibold text-lg">آگهی</p>
          <p>محتوا</p>
        </div>
        <div className="flex flex-col justify-center items-center p-2 m-2 shadow-md rounded w-1/5 min-h-28">
          <p className="font-semibold text-lg">امتیاز</p>
          <p>محتوا</p>
        </div>
        <div className="flex flex-col justify-center items-center p-2 m-2 shadow-md rounded w-1/5 min-h-28">
          <p className="font-semibold text-lg">پیام ها</p>
          <p>محتوا</p>
        </div>
      </header>
    </div>
  );
}
