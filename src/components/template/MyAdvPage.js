import AdvCardManage from "@/module/AdvCardManage";

export default function MyAdvPage({ advertisements }) {
  console.log(advertisements);
  return (
    <div className="p-5">
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
