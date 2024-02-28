import Advertisement from "@/models/Advertisement";
import AddAdvPage from "@/template/AddAdvPage";
import connectDB from "@/utils/ConnectDB";

export default async function page({ params: { advId } }) {
  await connectDB();
  const adv = await Advertisement.findOne({ _id: advId });

  if (!adv) {
    return (
      <p className="font-semibold text-base text-gray-600">
        هیچ آگهی ثبت نشده است.
      </p>
    );
  }

  return <AddAdvPage data={JSON.parse(JSON.stringify(adv))} />;
}
