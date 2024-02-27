import AdvCard from "./AdvCard";

export default function AdvCardManage({ data }) {
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-2/5 lg:w-2/5 shadow rounded m-5">
      <div className="w-full min-h-20">
        <AdvCard data={data} />
      </div>
      <div className="flex justify-around items-center w-full">
        <button className="bg-blue-100 text-blue-700 p-2 font-medium w-1/2">
          ویرایش
        </button>
        <button className="bg-red-100 text-red-700 p-2 font-medium w-1/2">
          حذف
        </button>
      </div>
    </div>
  );
}
