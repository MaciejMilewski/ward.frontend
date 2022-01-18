import Link from "../components/Link.jsx";
import Text from "../components/Text.jsx";
import React from "react";

export default function Button({href, children}) {
  return <Link href={href}>
    <button className="bg-blue-400 text-white px-3 py-1 rounded-md hover:bg-blue-500 active:mt-1">
      <Text>{children}</Text>
    </button>
  </Link>;
}
