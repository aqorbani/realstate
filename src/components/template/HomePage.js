import { categories, cities, services } from "@/constants/strings";
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
      <div>
        {/* {Object.keys(categories).map((i) => (
          <CategoryCard title={categories[i]} name={i} />
        ))} */}
      </div>
      <div>
        <h3>شهر های پر بازدید</h3>
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
