"use client";

import LogoutButton from "@/module/LogoutButton";
import Link from "next/link";
import { LuUserSquare2 } from "react-icons/lu";

export default function DashboardSidebar({ email, role }) {
  return (
    <div className="shadow-md p-5 rounded">
      <div className="flex flex-col w-full justify-center items-center border-b-2 border-red-900">
        <div className="text-5xl text-gray-200">
          <LuUserSquare2 />
        </div>
        {role === "ADMIN" && (
          <p className="text-gray-500 font-medium">مدیریت</p>
        )}
        {email && <p className="text-gray-500 font-medium">{email}</p>}
      </div>
      <div className="p-2 w-full">
        <Link href="/dashboard">
          <div className="font-semibold text-lg mt-5 p-2 bg-gray-100 rounded hover:bg-red-200 cursor-pointer">
            اطلاعات حساب
          </div>
        </Link>
        <Link href="/dashboard/my">
          <div className="font-semibold text-lg mt-5 p-2 bg-gray-100 rounded hover:bg-red-200 cursor-pointer">
            آگهی های من
          </div>
        </Link>
        <Link href="/dashboard/add">
          <div className="font-semibold text-lg mt-5 p-2 bg-gray-100 rounded hover:bg-red-200 cursor-pointer">
            ثبت آگهی +
          </div>
        </Link>
        <LogoutButton />
      </div>
    </div>
  );
}
