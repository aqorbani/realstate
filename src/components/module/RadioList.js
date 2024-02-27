export default function RadioList({ advData, setAdvData }) {
  const { category } = advData;
  const changeHandler = () => {};
  return (
    <div className="mt-7 w-full">
      <p className="font-semibold text-base p-2">دسته بندی</p>
      <div>
        <div>
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            name="category"
            id="villa"
            checked={category === "villa"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}
