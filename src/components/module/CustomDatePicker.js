import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function CustomDatePicker({ advData, setAdvData }) {
  const changeHandler = (e) => {
    const date = new Date(e);
    setAdvData({ ...advData, constructionDate: date });
  };

  return (
    <div>
      <p>تاریخ ساخت</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={advData.constructionDate}
        onChange={changeHandler}
        calendarPosition="bottom-right"
      />
    </div>
  );
}

export default CustomDatePicker;
