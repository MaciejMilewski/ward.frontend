import React from "react";
import Link from "./components/Link.jsx";
import Text from "./components/Text.jsx";
import LanguageSwitch from "./components/LanguageSwitch.jsx";
import useAuthentication from "./auth.js";

export default function Layout({children}) {
  const [role, login, logout] = useAuthentication();

  return <div>
    <nav className="h-12 bg-blue-400 mb-3 shadow-md">
      <div className="h-12 container text-white mx-auto flex items-center justify-between">
        <p className="text-xl uppercase">
          <Link href="/">Ward</Link>
        </p>
        <LanguageSwitch/>
      </div>
    </nav>
    <div className="container mx-auto md:flex">
      <aside className="md:w-1/3">
        <p className="mb-2 text-sm">Navigation</p>
        <ul>
          <li>
            <Link href="/"><Text>Homepage</Text></Link>
          </li>
          <li>
            <Link href="/hours"><Text>Working hours</Text></Link>
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
        <ul className="mt-6">
          <li className="mb-2 text-sm">
            {role ? <>Logged as: {role}</> : 'Not logged'}
          </li>
          <li onClick={() => login('head')}>Head</li>
          <li onClick={() => login('planner')}>Planner</li>
          <li onClick={() => login('operator')}>Operator</li>
          <li onClick={() => login('secretary')}>Secretary</li>
          <li onClick={() => logout()} className="mt-3 text-gray-500"><Text>Log out</Text></li>
        </ul>
      </aside>
      <article className="md:w-2/3">
        {role === null
          ? <div>You're not logged, so nothing for you here</div>
          : <div className="rounded-xl bg-white py-5 px-3">
            {children}
          </div>}
      </article>
    </div>
  </div>;
}
