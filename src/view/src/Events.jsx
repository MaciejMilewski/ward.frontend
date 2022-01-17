import React from "react";
import Selectable from "./components/BigCalendar.jsx";
import events from './events.js'

export default function Events({}) {
  return <div>
    <Selectable events={events}/>
  </div>;
}
