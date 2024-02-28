"use client";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BiShare } from "react-icons/bi";

export default function ShareButton() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <CopyToClipboard text={url}>
      <div className="flex items-center cursor-pointer m-1 p-1 shadow rounded">
        <BiShare />
        <p>اشتراک گذاری</p>
      </div>
    </CopyToClipboard>
  );
}
