import React from "react";
import {useParams} from "react-router-dom";

export default function Operator({}) {
  const {operator} = useParams();

  return <div>Operator, #{operator}</div>;
}
