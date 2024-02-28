"use client";

import CustomDatePicker from "@/module/CustomDatePicker";
import Loader from "@/module/Loader";
import RadioList from "@/module/RadioList";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AddAdvPage({ data }) {
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

  useEffect(() => {
    if (data) {
      setAdvData(data);
    }
  }, [data]);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/adv", {
      method: "POST",
      body: JSON.stringify(advData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };

  const editHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/adv", {
      method: "PATCH",
      body: JSON.stringify(advData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };

  return (
    <div className="w-full">
      <h2 className="font-extrabold text-2xl p-4">
        {data ? "ویرایش آگهی" : "ثبت آگهی"}
      </h2>
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
        type="text"
        advData={advData}
        setAdvData={setAdvData}
        textArea={false}
      />
      <TextInput
        title="قیمت تومان"
        name="price"
        type="text"
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
      <RadioList advData={advData} setAdvData={setAdvData} />
      <TextList
        title="امکانات رفاهی"
        type="amenities"
        advData={advData}
        setAdvData={setAdvData}
      />
      <TextList
        title="قوانین"
        type="rules"
        advData={advData}
        setAdvData={setAdvData}
      />
      <CustomDatePicker advData={advData} setAdvData={setAdvData} />
      {loading ? (
        <Loader />
      ) : data ? (
        <button
          type="submit"
          onClick={editHandler}
          className="w-full md:w-4/5 lg:w-1/2 p-2 m-2 mt-20 mb-20 bg-red-950 text-white rounded hover:bg-red-900 cursor-pointer"
        >
          ویرایش آگهی
        </button>
      ) : (
        <button
          type="submit"
          onClick={submitHandler}
          className="w-full md:w-4/5 lg:w-1/2 p-2 m-2 mt-20 mb-20 bg-red-950 text-white rounded hover:bg-red-900 cursor-pointer"
        >
          ثبت آگهی
        </button>
      )}
    </div>
  );
}
