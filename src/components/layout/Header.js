import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

function Header() {
  return (
    <header className="flex justify-between w-full p-2 bg-gray-100">
      <ul className="flex pr-5">
        <li className="p-2">
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li className="p-2">
          <Link href="/advertisements">آگهی ها</Link>
        </li>
      </ul>
      <ul className="flex pl-5">
        <li className="p-2">
          <Link href="/signin" className="flex items-center">
            <FiLogIn />
            <span className="p-1">ورود</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
