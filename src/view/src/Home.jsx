import React from "react";
import Link from "./components/Link.jsx";

export default function Home({}) {
  return <div>
    <h3 className="text-md">Home</h3>
    <p>Go to: <Link href="/events">/events</Link></p>
  </div>;
}
