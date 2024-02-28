import { icons } from "@/constants/icons";
import { categories } from "@/constants/strings";
import ItemList from "@/module/ItemList";
import Title from "@/module/Title";
import { e2p, sp } from "@/utils/replaceNumber";
import { AiOutlinePhone } from "react-icons/ai";
import { BiCalendarCheck, BiShare } from "react-icons/bi";
import { HiHome, HiOutlineLocationMarker } from "react-icons/hi";

export default function DetailPage({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  },
}) {
  return (
    <div className="flex justify-center w-full">
      <div className="flex w-full md:w-2/3">
        <div className="flex flex-col rounded p-5 m-1 w-full md:w-5/6">
          <h1>{title}</h1>
          <span className="flex items-center">
            <HiOutlineLocationMarker />
            {location}
          </span>
          <br />
          <hr />
          <br />
          <p className="flex items-center">
            {icons[category]}
            {categories[category]}
          </p>
          <br />
          <hr />
          <br />
          <p>{sp(price)} تومان</p>
          <br />
          <hr />
          <br />
          <p className="flex items-center">
            <BiCalendarCheck />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
          <br />
          <hr />
          <br />
          <Title>توضیحات</Title>
          <p>{description}</p>
          <br />
          <hr />
          <br />
          <Title>امکانات رفاهی</Title>
          <ItemList data={amenities} />
          <br />
          <hr />
          <br />
          <Title>قوانین</Title>
          <ItemList data={rules} />
        </div>
        <div className="flex flex-col w-full md:w-1/6">
          <div className="m-1 p-1 shadow rounded">
            <div className="flex items-center">
              <HiHome />
              <p>املاک {realState}</p>
            </div>
            <div className="flex items-center">
              <AiOutlinePhone />
              {e2p(phone)}
            </div>
          </div>
          <div className="m-1 p-1 shadow rounded">
            <BiShare />
          </div>
        </div>
      </div>
    </div>
  );
}
