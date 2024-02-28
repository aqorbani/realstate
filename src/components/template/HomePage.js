import { categories, cities, services } from "@/constants/strings";
import CategoryCard from "@/module/CategoryCard";
import { FaCity } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center w-full p-5">
      <div className="flex flex-col w-full">
        <h1 className="flex justify-center font-bold text-red-950 text-3xl">
          سامانه خرید و اجاره ملک
        </h1>
        <ul className="flex justify-center">
          {services.map((i) => (
            <li key={i} className="flex p-2 m-2">
              <FiCircle />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center">
        {Object.keys(categories).map((i, index) => (
          <CategoryCard title={categories[i]} name={i} key={index} />
        ))}
      </div>
      <div className="mt-40">
        <h3 className="flex justify-center font-bold text-red-950 text-2xl">
          شهرهای پربازدید{" "}
        </h3>
        <ul className="flex flex-wrap justify-around">
          {cities.map((i) => (
            <li
              key={i}
              className="flex items-center p-3 m-3 rounded bg-gray-200"
            >
              <FaCity />
              <span className="p-2">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
