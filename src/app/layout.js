import { yekan } from "@/utils/fonts";
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <div className="flex flex-col h-screen justify-between">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
