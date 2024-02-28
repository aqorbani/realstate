import PropertiesPage from "@/template/PropertiesPage";

export default async function page({ searchParams }) {
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

  let finalData = data.data;

  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  return <PropertiesPage data={finalData} />;
}
