import AdvCardManage from "@/module/AdvCardManage";

export default function MyAdvPage({ advertisements }) {
  return (
    <div className="flex flex-wrap justify-around w-full p-5">
      {advertisements.length ? null : (
        <p className="font-semibold text-base text-gray-600">
          هیچ آگهی ثبت نشده است.
        </p>
      )}
      {advertisements.map((item) => (
        <AdvCardManage key={item._id} data={item} />
      ))}
    </div>
  );
}
