import React, {useEffect, useState} from "react";
import {events} from "../../../../http.js";

export default function EventsTable({}) {
  const [_events, setEvents] = useState(null);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    events()
      .then(_events => setEvents(_events))
      .catch(error => {
        if (error.response.status === 423) {
          setLocked(true);
        }
      })

  }, []);

  return <div>
    {locked === true
      ? 'Application locked, set hours'
      : _events === null ? 'Loading...' : JSON.stringify(_events)
    }
  </div>;
}
