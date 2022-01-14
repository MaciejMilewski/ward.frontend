import React from "react";
import Link from "./components/Link.jsx";
import Text from "./components/Text.jsx";
import LanguageSwitch from "./components/LanguageSwitch.jsx";

export default function Layout({children}) {
  return <div>
    <nav className="h-12 bg-blue-400 mb-3 shadow-md">
      <div className="h-12 container text-white mx-auto flex items-center justify-between">
        <p className="text-xl uppercase">Ward</p>
        <LanguageSwitch/>
      </div>
    </nav>
    <div className="container mx-auto">
      <div className="rounded-xl bg-white overflow-hidden">
        {children}
      </div>
      <div className="text-xs mt-2">
        <Link href="/">&lt; <Text>Go home</Text></Link>
      </div>
    </div>
  </div>;
}
