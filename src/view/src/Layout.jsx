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
    <div className="container mx-auto md:flex">
      <aside className="md:w-1/3">
        <ul>
          <li>
            <Link href="/"><Text>Homepage</Text></Link>
          </li>
          <li>
            <Link href="/events"><Text>Events</Text></Link>
          </li>
          <li>
            <Link href="/budget"><Text>Budget</Text></Link>
          </li>
          <li>
            <Link href="/rooms"><Text>Operation rooms</Text></Link>
          </li>
          <li>
            <Link href="/operators"><Text>Operators</Text></Link>
          </li>
          <li>
            <Link href="/types"><Text>Operation types</Text></Link>
          </li>
        </ul>
      </aside>
      <article className="md:w-2/3">
        <div className="rounded-xl bg-white py-5 px-3">
          {children}
        </div>
      </article>
    </div>
  </div>;
}
