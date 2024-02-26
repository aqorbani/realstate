"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import Loader from "@/module/Loader";
import { signIn } from "next-auth/react";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signinHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("نام کاربری و رمز عبور را وارد نمایید.");
      return;
    }
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("شما با موفقیت وارد حساب کاربری خود شده اید.");
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/4 min-w-52 shadow-md rounded p-2">
      <h4 className="font-extrabold text-2xl p-4">فرم ورود</h4>
      <form className="flex flex-col justify-center items-center w-full">
        <input
          className="shadow-sm bg-gray-50 rounded p-2 m-2 min-w-48 w-2/3"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ایمیل"
        />
        <input
          className="shadow-sm bg-gray-50 rounded p-2 m-2 min-w-48 w-2/3"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="رمز عبور"
        />
        {loading ? (
          <Loader />
        ) : (
          <button
            type="submit"
            onClick={signinHandler}
            className="w-full p-2 m-5 bg-red-950 text-white rounded hover:bg-red-900 cursor-pointer"
          >
            ورود
          </button>
        )}
      </form>
      <p>
        حساب کاربری ندارید؟
        <Link href="/signup">ثبت نام</Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SigninPage;
