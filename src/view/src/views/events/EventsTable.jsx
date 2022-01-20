import React, {useEffect, useState} from "react";
import {eventsList} from "../../../../http.js";
import Toolbar from "../Toolbar.jsx";

export default function EventsTable({}) {
  const [_events, setEvents] = useState(null);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    eventsList(10)
      .then(_events => setEvents(_events))
      .catch(error => {
        if (error.response.status === 423) {
          setLocked(true);
        }
      })

  }, []);

  return <div>
    <Toolbar href="/events/new"/>
    {locked === true
      ? 'Application locked, set hours'
      : _events === null ? 'Loading...' : <Json>{_events}</Json>
    }
  </div>;
}

function Json({children}) {
  return <div className="break-words">
    {JSON.stringify(children)}
  </div>
}