import React from "react";
import {useParams} from "react-router-dom";

export default function Event({}) {
  const {event} = useParams();

  return <div>Event #{event}</div>;
}
