import { yekan } from "@/utils/fonts";
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/providers/NextAuthProvider";
import Layout from "@/layout/Layout";

export const metadata = {
  title: "وبسایت املاک",
  description: "توضیحات وبسایت املاک",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <div className="flex flex-col h-screen justify-between">
          <NextAuthProvider>
            <Layout>{children}</Layout>
          </NextAuthProvider>

          <Toaster />
        </div>
      </body>
    </html>
  );
}
