import PropertiesPage from "@/template/PropertiesPage";

export default async function page() {
  const res = await fetch("http://localhost:3000/api/adv", {
    cache: "no-store",
  });
  const data = await res.json();

  if (data.error) return <h3>مشکلی پیش آمده است</h3>;

  return <PropertiesPage data={data} />;
}
