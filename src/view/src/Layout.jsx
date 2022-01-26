import React from "react";
import Link from "./components/Link.jsx";
import Text from "./components/Text.jsx";
import LanguageSwitch from "./components/LanguageSwitch.jsx";
import {useAuthentication} from "./components/Authenticated.jsx";
import usePermissions from "./permissions.js";

export default function Layout({children}) {
  const [role, login, logout] = useAuthentication();
  const perm = usePermissions();

  function handleLogin(role) {
    login(...credentials(role));
  }

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
      <aside className="md:w-1/3 lg:w-1/4">
        <p className="mb-2 text-sm">
          <Text>Navigation</Text>
        </p>
        <ul>
          <li>
            <Link href="/"><Text>Homepage</Text></Link>
          </li>
          {perm.hoursRead && <li>
            <Link href="/hours"><Text>Working hours</Text></Link>
          </li>}
          {perm.eventsRead && perm.eventsAll && <li>
            <Link href="/events"><Text>Events</Text></Link>
          </li>}
          {perm.eventsRead && <li>
            <Link href="/events/mine"><Text>My events</Text></Link>
          </li>}
          {perm.budget && <li>
            <Link href="/budget"><Text>Budget</Text></Link>
          </li>}
          {perm.roomsRead && <li>
            <Link href="/rooms"><Text>Operation rooms</Text></Link>
          </li>}
          {perm.operatorsRead && <li>
            <Link href="/operators"><Text>Operators</Text></Link>
          </li>}
          {perm.typesRead && <li>
            <Link href="/types"><Text>Operation types</Text></Link>
          </li>}
          {perm.patientsRead && <li>
            <Link href="/patients"><Text>Patients</Text></Link>
          </li>}
        </ul>
        <ul className="mt-6">
          <li className="mb-2 text-sm">
            {role ? <>Logged as: {role}</> : 'Not logged'}
          </li>
          <li onClick={() => handleLogin('head')}>Head</li>
          <li onClick={() => handleLogin('planner')}>Planner</li>
          <li onClick={() => handleLogin('operator')}>Operator</li>
          <li onClick={() => handleLogin('secretary')}>Secretary</li>
          <li onClick={() => logout()} className="mt-3 text-gray-500"><Text>Log out</Text></li>
        </ul>
      </aside>
      <article className="md:w-2/3 lg:w-3/4">
        {role === null
          ? <div>You're not logged, so nothing for you here</div>
          : <div className="rounded-xl bg-white py-5 px-3">
            {children}
          </div>}
      </article>
    </div>
  </div>;
}

function credentials(role) {
  const credentials = {
    head: ['user_hd', 'password'],
    planner: ['user_pl', 'password'],
    operator: ['user_op', 'password'],
    secretary: ['user_sc', 'password'],
  };
  return credentials[role];
}
