"use client";

import { useRouter } from "next/navigation";
import AdvCard from "./AdvCard";
import toast from "react-hot-toast";

export default function AdvCardManage({ data }) {
  const router = useRouter();

  const editHandler = () => {
    router.push(`/dashboard/my/${data._id}`);
  };
  const deleteHandler = async () => {
    const res = await fetch(`/api/adv/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-2/5 lg:w-2/5 shadow rounded m-5">
      <div className="w-full min-h-20">
        <AdvCard data={data} />
      </div>
      <div className="flex justify-around items-center w-full">
        <button
          onClick={editHandler}
          className="bg-blue-100 text-blue-700 p-2 font-medium w-1/2"
        >
          ویرایش
        </button>
        <button
          onClick={deleteHandler}
          className="bg-red-100 text-red-700 p-2 font-medium w-1/2"
        >
          حذف
        </button>
      </div>
    </div>
  );
}
