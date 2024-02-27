import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

export default function TextList({ title, type, advData, setAdvData }) {
  const addHandler = () => {
    setAdvData({ ...advData, [type]: [...advData[type], ""] });
  };
  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...advData[type]];
    list[index] = value;
    setAdvData({ ...advData, [type]: list });
  };
  const deleteHandler = (index) => {
    const list = [...advData[type]];
    list.splice(index, 1);
    setAdvData({ ...advData, [type]: list });
  };
  return (
    <div className="mt-7 w-full">
      <p className="font-semibold text-base p-2">{title}</p>
      {advData[type].map((i, index) => (
        <div key={index} className="flex items-center">
          <input
            type="text"
            value={i}
            className="shadow-sm bg-gray-50 rounded p-2 m-2 w-full md:w-4/5 lg:w-1/2"
            onChange={(e) => changeHandler(e, index)}
          />
          <button
            onClick={() => deleteHandler(index)}
            className="flex p-2 m-2 rounded bg-red-50 text-red-900"
          >
            <AiOutlineDelete />
            <p>حذف</p>
          </button>
        </div>
      ))}
      <button
        className="flex p-2 m-2 rounded bg-blue-50 text-blue-800"
        onClick={addHandler}
      >
        <MdOutlineLibraryAdd />
        <p>افزودن</p>
      </button>
    </div>
  );
}
