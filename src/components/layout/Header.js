"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

function Header() {
  const { data } = useSession();
  return (
    <header className="flex justify-between w-full p-2 bg-gray-100">
      <ul className="flex pr-5">
        <li className="p-2">
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li className="p-2">
          <Link href="/properties">آگهی ها</Link>
        </li>
      </ul>
      <ul className="flex pl-5">
        {data ? (
          <li className="p-2">
            <Link href="/dashboard" className="flex items-center">
              <FaUserAlt />
              <span className="p-1">پنل کاربری</span>
            </Link>
          </li>
        ) : (
          <li className="p-2">
            <Link href="/signin" className="flex items-center">
              <FiLogIn />
              <span className="p-1">ورود</span>
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
