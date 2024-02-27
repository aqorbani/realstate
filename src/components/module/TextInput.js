import { p2e } from "@/utils/replaceNumber";

export default function TextInput({
  title,
  name,
  type = "text",
  advData,
  setAdvData,
  textArea = false,
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAdvData({ ...advData, [name]: p2e(value) });
  };

  return (
    <div className="mt-7 w-full">
      <p className="font-semibold text-base p-2">{title}</p>
      {textArea ? (
        <textarea
          className="shadow-sm bg-gray-50 rounded p-2 m-2 w-full md:w-4/5 lg:w-1/2"
          type={type}
          name={name}
          value={advData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          className="shadow-sm bg-gray-50 rounded p-2 m-2 w-full md:w-4/5 lg:w-1/2"
          type={type}
          name={name}
          value={advData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}
