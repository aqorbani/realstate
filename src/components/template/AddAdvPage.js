"use client";

import { useState } from "react";

export default function AddAdvPage() {
  const [advData, setAdvData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  return <div>AddAdvPage</div>;
}
