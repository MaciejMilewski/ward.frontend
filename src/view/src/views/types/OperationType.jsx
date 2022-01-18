import React from "react";
import {useParams} from "react-router-dom";

export default function OperationType({}) {
  const {type} = useParams();
  return <div>OperationType, {type}</div>;
}
