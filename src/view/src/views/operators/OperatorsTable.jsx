import React, {useEffect, useState} from "react";
import {operatorsList} from "../../../../http.js";
import Toolbar from "../Toolbar.jsx";

export default function OperatorsTable({}) {
  const [_operators, setOperators] = useState(null);

  useEffect(() => {
    operatorsList().then(_operators => setOperators(_operators));
  }, []);

  return <div>
    <Toolbar href="/operators/new"/>
    {_operators === null ? 'Loading...' : JSON.stringify(_operators)}
  </div>;
}
