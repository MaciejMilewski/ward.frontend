import React from "react";
import Link from "./components/Link.jsx";
import Text from "./components/Text.jsx";

export default function Layout({children}) {
  return <div>
    <nav className="h-12 bg-blue-400 mb-3 shadow-md">
      <div className="h-12 container text-white mx-auto flex items-center">
        <p className="text-xl uppercase">Ward</p>
      </div>
    </nav>
    <div className="container rounded-md mx-auto bg-white px-3 py-5">
      <div className="mb-12">
        {children}
      </div>
      <div className="text-xs">
        <Link href="/">&lt; <Text>Go home</Text></Link>
      </div>
    </div>
  </div>;
}
