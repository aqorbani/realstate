"use client";

import TextInput from "@/module/TextInput";
import { useState } from "react";

export default function AddAdvPage() {
  const [advData, setAdvData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  return (
    <div className="w-full">
      <h2 className="font-extrabold text-2xl p-4">ثبت آگهی</h2>
      <TextInput
        title="عنوان آگهی"
        name="title"
        type="text"
        advData={advData}
        setAdvData={setAdvData}
        textArea={false}
      />
      <TextInput
        title="توضیحات آگهی"
        name="description"
        type="text"
        advData={advData}
        setAdvData={setAdvData}
        textArea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        type="text"
        advData={advData}
        setAdvData={setAdvData}
        textArea={false}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        type="number"
        advData={advData}
        setAdvData={setAdvData}
        textArea={false}
      />
      <TextInput
        title="قیمت تومان"
        name="price"
        type="number"
        advData={advData}
        setAdvData={setAdvData}
        textArea={false}
      />
      <TextInput
        title="بنگاه املاک"
        name="realState"
        type="text"
        advData={advData}
        setAdvData={setAdvData}
        textArea={false}
      />
      <button
        type="submit"
        onClick={() => console.log(advData)}
        className="w-full md:w-4/5 lg:w-1/2 p-2 m-2 mt-20 mb-20 bg-red-950 text-white rounded hover:bg-red-900 cursor-pointer"
      >
        ثبت آگهی
      </button>
    </div>
  );
}
