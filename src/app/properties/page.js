import PropertiesPage from "@/template/PropertiesPage";

export default async function page() {
  const res = await fetch("http://localhost:3000/api/adv", {
    cache: "no-store",
  });
  const data = await res.json();

  if (data.error)
    return (
      <p className="font-semibold text-base text-gray-600">
        مشکلی در بارگذاری داده ها پیش آمده است.
      </p>
    );

  return <PropertiesPage data={data.data} />;
}
