import React, {useEffect, useState} from "react";
import {rooms} from "../../../../http.js";
import Toolbar from "../Toolbar.jsx";

export default function RoomsTable({}) {
  const [_rooms, setRooms] = useState(null);

  useEffect(() => {
    rooms().then(_rooms => setRooms(_rooms.rooms));
  }, []);

  return <div>
    <Toolbar href="/rooms/new"/>
    <Rooms rooms={_rooms}/>
  </div>;
}

function Rooms({rooms}) {
  if (rooms === null) {
    return 'Loading'
  }
  return <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>active</th>
    </tr>
    </thead>
    <tbody>
    {rooms.map((room, index) => {
      return <tr key={index}>
        <td className="border">{room.name}{room.name.trim().length === 0 ? ' (Blank)' : ''}</td>
        <td className="border">{room.active ? 'Active' : 'Inactive'}</td>
      </tr>;
    })}
    </tbody>
  </table>
}
