import React, {useEffect, useState} from "react";
import {rooms} from "../../../../http.js";
import Toolbar from "../Toolbar.jsx";

export default function RoomsTable({}) {
  const [_rooms, setRooms] = useState(null);

  useEffect(() => {
    rooms().then(_rooms => setRooms(_rooms));
  }, []);

  return <div>
    <Toolbar href="/rooms/new" />
    {_rooms === null ? 'Loading...' : JSON.stringify(_rooms)}
  </div>;
}
