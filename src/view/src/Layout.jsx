import React from "react";

export default function Layout({children}) {
  return <div>
    <nav className="h-12 bg-blue-400 mb-3 shadow-md">
      <div className="h-12 container text-white mx-auto flex items-center">
        <p className="text-xl uppercase">Ward</p>
      </div>
    </nav>
    <div className="container rounded-md mx-auto bg-white px-3 py-5">
      {children}
    </div>
  </div>;
}
