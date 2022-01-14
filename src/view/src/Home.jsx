import React from "react";
import Link from "./components/Link.jsx";
import Text from "./components/Text.jsx";

export default function Home({}) {
  return <div>
    <h3 className="text-md">
      <Text>Home</Text>
    </h3>
    <p><Text>Go to</Text>: <Link href="/events">/events</Link></p>
  </div>;
}
