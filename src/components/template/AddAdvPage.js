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
    <div>
      <h2 className="font-extrabold text-2xl p-4">ثبت آگهی</h2>
      <TextInput
        title="عنوان آگهی"
        name="title"
        advData={advData}
        setAdvData={setAdvData}
        textArea={false}
      />
    </div>
  );
}
