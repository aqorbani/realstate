import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SigninPage from "@/template/SigninPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return (
    <div className="flex justify-center items-center w-full h-auto">
      <SigninPage />
    </div>
  );
}
