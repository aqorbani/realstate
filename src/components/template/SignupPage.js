"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import Loader from "@/module/Loader";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      toast.error("رمز و تکرار آن برابر نیست");
      return;
    }
    if (!email || !password) {
      toast.error("نام کاربری و رمز عبور را وارد نمایید.");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/4 min-w-52 shadow-md rounded p-2">
      <h4 className="font-extrabold text-2xl p-4">فرم ثبت نام</h4>
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
        <input
          className="shadow-sm bg-gray-50 rounded p-2 m-2 min-w-48 w-2/3"
          name="confPassword"
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          placeholder="تکرار رمز عبور"
        />
        {loading ? (
          <Loader />
        ) : (
          <button
            type="submit"
            onClick={signupHandler}
            className="w-full p-2 m-5 bg-red-950 text-white rounded hover:bg-red-900 cursor-pointer"
          >
            ثبت نام
          </button>
        )}
      </form>
      <p>
        حساب کاربری دارید؟
        <Link href="/signin">ورود</Link>
      </p>
    </div>
  );
}

export default SignupPage;
