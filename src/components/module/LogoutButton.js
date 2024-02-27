"use client";

import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

function LogoutButton() {
  return (
    <button
      onClick={signOut}
      className="flex w-full font-semibold text-lg mt-12 p-2 text-red-900 bg-gray-100 rounded hover:text-red-700 cursor-pointer"
    >
      <FiLogOut />
      <p className="mr-2 font-semibold text-lg">خروج</p>
    </button>
  );
}

export default LogoutButton;
