import React, {useEffect, useState} from "react";
import {eventsList} from "../../../../http.js";
import Toolbar from "../Toolbar.jsx";
import Text from "../../components/Text.jsx";

export default function EventsTable({onlyMine}) {
  const [_events, setEvents] = useState(null);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    eventsList(10)
      .then(_events => setEvents(_events.events))
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
      : _events === null ? 'Loading...' : <>
        <Events events={_events} onlyMine={onlyMine}/>
      </>
    }
  </div>;
}

function Events({events, onlyMine}) {
  if (events === null) {
    return 'Loading'
  }
  return <div>
    <h3 className="text-xl mb-6">
      <Text>{onlyMine ? 'My events' : 'Events'}</Text>
    </h3>
    <table>
      <thead>
      <tr>
        <th/>
        <th><Text>PESEL</Text></th>
        <th><Text>Patient</Text></th>
        <th><Text>Code</Text></th>
        <th><Text>Operation room</Text></th>
        <th><Text>Operator</Text></th>
        <th><Text>Duration</Text></th>
        <th><Text>Accepted</Text></th>
        <th><Text>Status</Text></th>
      </tr>
      </thead>
      <tbody>
      {events.map((type, index) => {
        return <tr key={index}>
          <td className="border">{type.id}</td>
          <td className="border">{type.patient_pesel}</td>
          <td className="border">{type.patient_name}</td>
          <td className="border">{type.operation_type_name} ({type.operation_type_code})</td>
          <td className="border">{type.operation_room_name}</td>
          <td className="border">{type.operator_name}</td>
          <td className="border">{type.operation_duration + type.cleanup_duration}</td>
          <td className="border">{type.accepted}</td>
          <td className="border">{type.status}</td>
        </tr>;
      })}
      </tbody>
    </table>
  </div>
}
