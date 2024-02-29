import Advertisement from "@/models/Advertisement";
import DetailPage from "@/template/DetailPage";
import connectDB from "@/utils/ConnectDB";

export default async function page({ params: { advId } }) {
  await connectDB();
  const adv = await Advertisement.findOne({ _id: advId });
  if (!adv)
    return (
      <p className="font-semibold text-base text-gray-600 p-5">
        محتوایی برای نمایش وجود ندارد
      </p>
    );
  return <DetailPage data={adv} />;
}

export const generateMetadata = async ({ params: { advId } }) => {
  await connectDB();
  const adv = await Advertisement.findOne({ _id: advId });

  return {
    title: adv.title,
    description: adv.description,
    authors: { name: adv.realState },
    keywords: ["Next.js", "React", "JavaScript", "HealthCare", "Biodiversity"],
    other: { mytag: "test meta tag" },
  };
};
