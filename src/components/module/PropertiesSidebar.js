import { categories } from "@/constants/strings";
import Link from "next/link";
import { HiFilter } from "react-icons/hi";

export default function PropertiesSidebar() {
  return (
    <div className="p-2">
      <p className="flex items-center font-semibold text-base text-red-950">
        <HiFilter />
        دسته بندی
      </p>
      <div className="flex flex-col mr-3 mt-3">
        <Link href="/properties">همه</Link>
        {Object.keys(categories).map((i, index) => (
          <Link
            key={index}
            href={{
              pathname: "/properties",
              query: { category: i },
            }}
          >
            {categories[i]}
          </Link>
        ))}
      </div>
    </div>
  );
}
