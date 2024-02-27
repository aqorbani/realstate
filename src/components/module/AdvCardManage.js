import AdvCard from "./AdvCard";

export default function AdvCardManage({ data }) {
  return (
    <div>
      {data.title}
      <AdvCard data={data} />
    </div>
  );
}
