export default function RadioList({ advData, setAdvData }) {
  const { category } = advData;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAdvData({ ...advData, [name]: value });
  };
  return (
    <div className="mt-7 w-full">
      <p className="font-semibold text-base p-2">دسته بندی</p>
      <div className="flex p-2">
        <div className="flex bg-gray-100 cursor-pointer m-2 rounded p-2">
          <label className="cursor-pointer" htmlFor="villa">
            ویلا
          </label>
          <input
            className="cursor-pointer"
            type="radio"
            name="category"
            value="villa"
            id="villa"
            checked={category === "villa"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex bg-gray-100 cursor-pointer m-2 rounded p-2">
          <label className="cursor-pointer" htmlFor="apartment">
            آپارتمان
          </label>
          <input
            className="cursor-pointer"
            type="radio"
            name="category"
            value="apartment"
            id="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex bg-gray-100 cursor-pointer m-2 rounded p-2">
          <label className="cursor-pointer" htmlFor="commercial">
            تجاری و اداری
          </label>
          <input
            className="cursor-pointer"
            type="radio"
            name="category"
            value="commercial"
            id="commercial"
            checked={category === "commercial"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex bg-gray-100 cursor-pointer m-2 rounded p-2">
          <label className="cursor-pointer" htmlFor="land">
            زمین
          </label>
          <input
            className="cursor-pointer"
            type="radio"
            name="category"
            value="land"
            id="land"
            checked={category === "land"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}
