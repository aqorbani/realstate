"use client";

import { useRouter } from "next/navigation";
import AdvCard from "./AdvCard";
import toast from "react-hot-toast";

export default function AdvCardAdmin({ data }) {
  const router = useRouter();

  const publishHandler = async () => {
    const res = await fetch(`/api/adv/publish/${data._id}`, {
      method: "PATCH",
    });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    } else {
      toast.error(result.error);
    }
  };

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
