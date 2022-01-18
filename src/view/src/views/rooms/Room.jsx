import React from "react";
import {useParams} from "react-router-dom";

export default function Room() {
  const {room} = useParams();

  return <div>Room #{room}</div>;
}
