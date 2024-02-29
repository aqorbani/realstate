"use client";

import { useRouter } from "next/navigation";
import AdvCard from "./AdvCard";

export default function AdvCardAdmin({ data }) {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-2/5 shadow rounded m-5">
      <div className="w-full min-h-20">
        <AdvCard data={data} />
      </div>
      <div className="flex justify-around items-center w-full">
        <button
          onClick={publishHandler}
          className="bg-green-100 text-green-700 p-2 font-medium w-full"
        >
          انتشار
        </button>
      </div>
    </div>
  );
}
