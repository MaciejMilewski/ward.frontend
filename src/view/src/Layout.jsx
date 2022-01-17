import React from "react";
import LanguageSwitch from "./components/LanguageSwitch.jsx";

export default function Layout({children}) {
  return <div>
    <nav className="h-12 bg-blue-400 shadow-md">
      <div className="h-12 container text-white mx-auto flex items-center justify-between">
        <p className="text-xl uppercase">Ward</p>
        <LanguageSwitch/>
      </div>
    </nav>
    <div className="mx-auto">
      <div className="bg-white">
        {children}
      </div>
    </div>
  </div>;
}
