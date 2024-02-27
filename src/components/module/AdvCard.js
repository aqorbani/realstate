import { icons } from "@/constants/icons";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { sp } from "@/utils/replaceNumber";

export default function AdvCard({
  data: { _id, category, title, location, price },
}) {
  return (
    <div className="flex flex-row p-2 w-full">
      <div className="flex flex-col w-full">
        <div className="font-semibold text-4xl">{icons[category]}</div>
        <p>{title}</p>
        <p className="flex">
          <HiOutlineLocationMarker />
          {location}
        </p>
        <span>{sp(price)} تومان</span>
      </div>
      <Link
        href={`/buy-residential/${_id}`}
        className="flex font-normal text-sm text-gray-600 p-2 rounded"
      >
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
}
