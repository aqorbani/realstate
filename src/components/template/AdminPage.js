"use client";
import AdvCardAdmin from "@/module/AdvCardAdmin";

export default function AdminPage({ advertisements }) {
  return (
    <div className="flex flex-wrap justify-around w-full p-5">
      {advertisements.length ? null : (
        <p className="font-semibold text-base text-gray-600">
          هیچ آگهی ثبت نشده است.
        </p>
      )}
      {advertisements.map((item) => (
        <AdvCardAdmin key={item._id} data={item} />
      ))}
    </div>
  );
}
