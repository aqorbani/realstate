import { p2e } from "@/utils/replaceNumber";

export default function TextInput({
  title,
  name,
  advData,
  setAdvData,
  textArea = false,
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAdvData({ ...advData, [name]: p2e(value) });
  };

  return (
    <div>
      <p className="font-semibold text-base p-2">{title}</p>
      {textArea ? (
        <textarea
          className="shadow-sm bg-gray-50 rounded p-2 m-2 min-w-48 w-2/3"
          type="text"
          name={name}
          value={advData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          className="shadow-sm bg-gray-50 rounded p-2 m-2 min-w-48 w-2/3"
          type="text"
          name={name}
          value={advData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}
