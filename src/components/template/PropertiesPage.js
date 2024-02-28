import AdvCard from "@/module/AdvCard";
import PropertiesSidebar from "@/module/PropertiesSidebar";

export default function PropertiesPage({ data }) {
  return (
    <div className="flex flex-col lg:flex-row p-5">
      <div className="w-full lg:w-1/6 shadow rounded">
        <PropertiesSidebar />
      </div>
      <div className="w-full lg:w-5/6">
        {data.length ? (
          data.map((item, index) => (
            <div key={index} className="shadow m-3">
              <AdvCard data={item} />
            </div>
          ))
        ) : (
          <p className="font-semibold text-base text-gray-600">
            دیتایی برای بارگذاری وجود ندارد.
          </p>
        )}
      </div>
    </div>
  );
}
