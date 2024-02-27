export default function TextInput({
  title,
  name,
  advData,
  setAdvData,
  textArea = false,
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    // setAdvData({ ...advData, [name]: p2e(value) });
  };

  return (
    <div>
      <p>{title}</p>
      {textArea ? (
        <textarea
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}
